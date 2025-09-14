import jwt from 'jsonwebtoken'

const genToken = async (userId) => {

      const raw = process.env.JWT_SECRET;
     const secret = (raw || "").trim();
    try {
        if (!secret) {
            throw new Error("JWT_SECRET is not set in environment variables")
        }
      return jwt.sign({ userId }, secret, { expiresIn: "10d", algorithm: "HS256" });
    } catch (error) {
        console.error("JWT generation error:", error.message)
        throw error
    }
}

export default genToken

