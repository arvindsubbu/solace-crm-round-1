# Alphagnito CRM – Full Stack Technical Assessment

## 📌 Project Overview

This is a full-stack CRM web application built for the Alphagnito Round 1 Technical Assessment.

The application includes:

- User Authentication (Register & Login with JWT)
- Agent Dashboard
- Full CRUD operations for Agents
- MySQL database integration
- UI built to closely match the provided Figma design

---

## 🚀 Tech Stack

Frontend:
- React JS
- Bootstrap 5
- Axios
- React Router DOM

Backend:
- Node.js
- Express.js
- JWT (Authentication)
- bcrypt (Password hashing)

Database:
- MySQL

---

## 🔐 Authentication Features

- Password hashing using bcrypt
- JWT-based authentication
- Protected routes for dashboard and agents
- Unique email validation at database level
- Token-based session management

---

## 📊 Agent Management (CRUD)

After login, users can:

- Create new agents (via modal)
- View all agents in table format
- Update existing agent details
- Delete agents with confirmation prompt

---

## 🗄 Database Schema

### Users Table

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  mobile VARCHAR(20) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

### Agents Table

CREATE TABLE agents (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  status ENUM('Active','Inactive','Suspended') DEFAULT 'Active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

---

## 📡 API Endpoints

### Authentication

POST   /api/auth/register   → Register user  
POST   /api/auth/login      → Login user  

### Agents (Protected)

GET    /api/agents          → Get all agents  
POST   /api/agents          → Create agent  
PUT    /api/agents/:id      → Update agent  
DELETE /api/agents/:id      → Delete agent  

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

git clone <your-repo-link>
cd project-folder

---

### 2️⃣ Backend Setup

cd server  
npm install  

Create a `.env` file inside server folder:

PORT=5000  
JWT_SECRET=your_secret_key  
DB_HOST=localhost  
DB_USER=root  
DB_PASSWORD=your_password  
DB_NAME=your_database_name  

Start server:

npm start  

---

### 3️⃣ Frontend Setup

cd client  
npm install  
npm run dev  

---

## 🔒 Security Measures

- Passwords hashed using bcrypt
- JWT authentication middleware
- Parameterized SQL queries (prevents SQL injection)
- Environment variables used for sensitive data
- `.env` file excluded from repository

---

## 📁 Project Structure

```
Alphagnito/
├── client/
│   ├── src/
│   │   ├── api/
│   │   │   └── axiosInstace.js
│   │   ├── components/
│   │   │   ├── DashboardLayout.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── pages/
│   │   │   ├── Agents.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
├── server/
│   ├── config/
│   │   └── db.js
│   ├── controller/
│   │   ├── agent.controller.js
│   │   └── auth.controller.js
│   ├── middleware/
│   │   └── auth.middleware.js
│   ├── routes/
│   │   ├── agent.routes.js
│   │   └── auth.routes.js
│   ├── server.js
│   ├── package.json
│   └── .env (create locally)
└── README.md
```

---

## ✅ Evaluation Coverage

✔ UI closely matches Figma design  
✔ Full CRUD functionality  
✔ JWT authentication  
✔ Password hashing  
✔ MySQL integration  
✔ Clean and structured code  

---

## 👨‍💻 Author

Arvind S  
Full Stack Developer