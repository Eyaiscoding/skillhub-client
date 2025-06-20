# 👩‍💻 RFC Skillhub – Employee Client

This is the **frontend user interface** of RFC Skillhub — an internal training tracking platform developed with a microservice architecture and deployed on Azure Kubernetes Service (AKS).

This app allows RFC employees to:
- Browse available training courses and certifications
- Manage a personal To-Do list
- Track progress on ongoing sessions

## 🌟 Key Features

- Secure login and registration (with JWT)
- Add/remove courses and certifications to/from a personal To-Do list
- Progress tracking for each item
- Realtime feedback from the backend via REST API
- Clean, responsive UI for employee experience

## 🛠 Tech Stack

- **Frontend Framework:** React.js
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Routing & State:** React Router, Context API
- **Authentication:** JWT (via backend API Gateway)
- **Deployment:** Azure Kubernetes Service (AKS)
- **CI/CD:** GitHub Actions
- **Containerization:** Docker
- **Web Server:** Nginx

## ⚙️ Deployment Pipeline

1. Docker image is built from the React app
2. Image is pushed to Azure Container Registry (ACR)
3. GitHub Actions deploys the container to AKS via `kubectl`



