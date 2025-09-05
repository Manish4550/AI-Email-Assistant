📧 AI-Email-Assistant

An AI-powered email assistant built with Spring Boot and React.
It generates contextual email replies using Google Gemini AI, with smart subject line processing and real-time response generation.

🌍 Live Demo: (https://ai-email-assistant-two.vercel.app/)

📦 GitHub Repo: https://github.com/Manish4550/AI-Email-Assistant

🚀 Features

🤖 AI-Powered Email Generation – Uses Google Gemini AI to generate contextual replies.

📝 Smart Subject Line Cleaning – Removes unnecessary subject lines before processing.

⚡ Real-time Processing – Fast email content generation with clean REST APIs.

💻 Modern UI – React-based interface for smooth user experience.

🔗 Full-Stack Integration – Spring Boot backend + React frontend.

🛠️ Tech Stack
🔹 Frontend

React (Vite)

Axios (API calls)

TailwindCSS / Bootstrap (UI styling)

🔹 Backend

Spring Boot

RESTful APIs

Maven / Gradle

🔹 AI Integration

Google Gemini API

🔹 Deployment

Frontend → Vercel

Backend → Render


📂 Project Structure
AI-Email-Assistant/
├── EMAIL-WRITER-EXT/        # Browser extension (optional)
├── email-writer-frontend/   # React frontend
├── email-writer-sb/         # Spring Boot backend
└── README.md                # Project documentation


⚙️ Setup Instructions
🔹 Clone the Repository
git clone https://github.com/Manish4550/AI-Email-Assistant.git
cd AI-Email-Assistant


🔹 Backend (Spring Boot) – Local Run
cd email-writer-sb
./mvnw spring-boot:run
Backend runs on → http://localhost:8080

🔹 Frontend (React) – Local Run
cd email-writer-frontend
npm install
npm run dev
Frontend runs on → http://localhost:5173


🧩 Browser Extension (Optional)

The Email Writer Extension allows you to generate AI-powered email replies directly inside your inbox.

🔹 Installation (Developer Mode)

Open Google Chrome (or Chromium-based browser).

Go to Extensions → Manage Extensions (chrome://extensions/).

Enable Developer mode (top-right).

Click Load unpacked.

Select the EMAIL-WRITER-EXT/ folder from this repository.

🔹 Usage

Open your email client (e.g., Gmail).

Click the AI Email Assistant extension icon in the toolbar.

Enter your email context / prompt (e.g., "Reply to a meeting invitation").

The extension connects to the backend API and generates a reply using Google Gemini AI.

Copy & paste the generated response into your email.

🔹 Notes

Make sure the backend is running locally or deployed (Render).

Update the API endpoint in the extension’s config.js:

📸 Screenshots

🔹 Dashboard View
<img width="1912" height="974" alt="Dashboard Screenshot" src="https://github.com/user-attachments/assets/266a617a-a5b8-4862-a9d2-76928493ff47" />

🔹 Email Reply Generation
<img width="1597" height="330" alt="Reply Screenshot" src="https://github.com/user-attachments/assets/85a0bd4e-6e36-42c6-93be-5e6ae5d490bd" />


📖 Future Improvements

🔒 Add user authentication (JWT, OAuth).

📬 Email scheduling & auto-send.

📊 Analytics dashboard for sent emails.

🌐 Multi-language support.

👨‍💻 Author

Manish4550
🔗 GitHub Profile

📧 Contact: Amity4933@gmail.com
