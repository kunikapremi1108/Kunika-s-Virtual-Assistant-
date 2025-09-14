// backend/index.js
import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import assistantRouter from './routes/assistant.route.js';
import connectDb from './config/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import serverless from 'serverless-http';

dotenv.config();
const app = express();

const allowedOrigins = (process.env.FRONTEND_URL || 'http://localhost:5173').split(',').map(s => s.trim());

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: (origin, callback) => {
      // allow requests with no origin (e.g. curl, native mobile apps, server-to-server)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error(`CORS policy: origin ${origin} not allowed`), false);
    },
    credentials: true,
  })
);

// Routes
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/assistant', assistantRouter);

// Health check & root
app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));
app.get('/', (req, res) => res.status(200).send('VirtualAssistant API is running'));

// DB connect helper (cached)
export async function ensureDbConnection() {
  if (globalThis._dbConnected) return;
  await connectDb();
  globalThis._dbConnected = true;
}

// Export Express app for tests and provide a serverless handler for Vercel
export default app;
export const handler = async (event, context) => {
  await ensureDbConnection();
  const h = serverless(app);
  return h(event, context);
};

// Local dev: start server only when not running on Vercel
if (!process.env.VERCEL) {
  const port = process.env.PORT || 8000;
  (async () => {
    try {
      await ensureDbConnection();
      app.listen(port, () => {
        console.log(`🚀 Server running on http://localhost:${port}`);
      });
    } catch (error) {
      console.error('❌ Database connection failed:', error.message);
      process.exit(1);
    }
  })();
}
