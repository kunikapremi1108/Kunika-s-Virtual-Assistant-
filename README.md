<div align="center">

  <!-- Logo -->
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Robot.png" alt="Robot" width="120" height="120">

  # Kunika's Virtual Assistant

  An intelligent, multi-lingual, and context-aware virtual assistant designed to deliver personalized and dynamic conversations. Built with a powerful Node.js backend and a sleek, responsive frontend.

  <!-- Live Demo Button -->
  <a href="https://virtual-assistant-frontend-seven.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Click to See ">
  </a>
  </br>
  </br>
  </br>
  
  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
    <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  </p>
</div>

---

## ✨ Advanced Features

This project goes beyond a basic chatbot by incorporating advanced AI-driven features for a more human-like and efficient user experience.

*   🧠 **Conversation Summarization**: Utilizes AI to create concise summaries of recent chats, providing richer context for more coherent and relevant follow-up responses.
*   🎭 **Dynamic Personality Modes**: Switch between different assistant personas (`Default`, `Study`, `Emotional`, `Casual`, `Advanced`) to tailor the conversation style to your needs.
*   🌐 **Multi-Lingual Support**: Delivers responses in both **English** and **Hindi**, with prompts and safety features adapted for each language.
*   🔊 **Dynamic Text-to-Speech (TTS)**: The assistant's voice changes based on the detected emotional tone of the response, creating a more engaging and natural interaction.
*   🛡️ **Proactive Safety System**: Includes a robust sensitive content filter to handle harmful, medical, or crisis-related queries with safe, pre-defined responses.
*   🔐 **Secure User Authentication**: Full sign-up and login functionality using JWT for secure session management.

---

## 🛠️ Technology Stack

| Area      | Technology                               |
| --------- | ---------------------------------------- |
| **Backend**   | Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt |
| **Frontend**  | React, Vite, Tailwind CSS                     |
| **AI Model**  | Google Gemini 2.0 Flash                |
| **Deployment**| Vercel (Frontend & Backend), MongoDB Atlas      |

---

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- **Node.js** (v18.x or newer)
- **npm** or **yarn**
- **MongoDB Atlas** account

### Installation & Setup

1.  **Clone the Repository**
    ```
    git clone https://github.com/kunikapremi1108/Kunika-s-Virtual-Assistant-.git
    cd Kunika-s-Virtual-Assistant-
    ```

2.  **Set Up the Backend**
    ```
    cd backend
    npm install
    ```
    Create a `.env` file in the `backend` directory and add the following:
    ```
    # --- Server & Frontend URL ---
    PORT=8000
    FRONTEND_URL=http://localhost:5173

    # --- Database ---
    MONGODB_URI=your_mongodb_connection_string

    # --- Security ---
    JWT_SECRET=your_super_secret_and_long_jwt_key
    ```

3.  **Set Up the Frontend**
    ```
    cd ../frontend
    npm install
    ```

### Running the Application

1.  **Start the Backend Server** (from the `backend` directory)
    ```
    npm start
    ```
    > The API will be running at `http://localhost:8000`.

2.  **Start the Frontend Development Server** (from the `frontend` directory)
    ```
    npm run dev
    ```
    > Your application will be accessible at `http://localhost:5173`.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to fork the repository, make your changes, and open a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/NewFeature`)
3.  Commit your Changes (`git commit -m 'Add some NewFeature'`)
4.  Push to the Branch (`git push origin feature/NewFeature`)
5.  Open a Pull Request

---

## 📄 License

Distributed under the MIT License.

---

<div align="center">
  <p>Created with ❤️ by Kunika Premi</p>
</div>
