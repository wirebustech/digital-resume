# Digital Resume

![Node.js Version](https://img.shields.io/badge/Node.js-16.x%2B-green)
![License](https://img.shields.io/badge/License-MIT-blue)
![Status](https://img.shields.io/badge/Status-Live-brightgreen)

A modern, API-driven digital resume showcasing technical expertise in cloud infrastructure and systems administration. Features dynamic content rendering from a Node.js backend with responsive frontend design.

## 🚀 Live Demo
[https://oputauche.com](https://oputauche.com)

## ✨ Features
- **Dynamic Content API**: JSON-powered resume data
- **Responsive Design**: Mobile-first approach
- **Interactive Skills Display**: Visual proficiency indicators
- **Project Showcases**: Detailed technical implementations
- **Modern UI**: Clean typography and card-based layout
- **Easy Maintenance**: Update content via JSON configuration

## ⚙️ Installation

### Prerequisites
- Node.js v16+
- Modern web browser

### Backend Setup
```bash
# Clone repository
git clone https://github.com/wirebustech/digital-resume.git

# Navigate to project directory
cd digital-resume

# Install dependencies
npm install

# Start development server
node backend.js

Frontend Access
Open index.html in your browser

Ensure backend is running at http://localhost:3001

📋 Project Structure

/digital-resume
├── backend.js         # API server (Node.js/Express)
├── index.html         # Frontend interface
├── README.md          # Documentation
└── package.json       # Dependency management



📡 API Reference
GET /api/resume
Returns complete resume data

Sample Response:

{
  "personalInfo": {
    "name": "***",
    "email": "****",
    ...
  },
  "skills": [...],
  "projects": [...],
  "education": {...},
  "certifications": [...]
}

🛠 Tech Stack
Backend
Node.js
Express

Frontend
HTML5
CSS3
JavaScript

DevOps
CORS

📜 License
This project is licensed under the MIT License - see LICENSE for details.

🤝 Contributing
Fork the repository

Create your feature branch:

git checkout -b feature/your-improvement

git commit -m 'Add meaningful message'

git push origin feature/your-improvement

📬 Contact
Oputa Uche
📧 oputauzoukwu@gmail.com