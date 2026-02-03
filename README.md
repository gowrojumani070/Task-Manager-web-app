# Task Manager Web App

A mobile-friendly Task Manager application built with **React.js** (Frontend) and **Python/Django** (Backend).

## 🚀 Live Demo

- **Frontend**: [Netlify URL - TBD after deployment]
- **Backend API**: [Render URL - TBD after deployment]

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- CSS3 with modern features (Glassmorphism, Gradients)
- Responsive design (Mobile-first)

### Backend
- Python 3.x
- Django 4.x
- Django REST Framework
- SQLite (development) / PostgreSQL (production)

## 📋 Features

- ✅ Add new tasks
- ✅ View all tasks
- ✅ Mark tasks as completed
- ✅ Delete tasks
- ✅ Mobile-responsive UI
- ✅ Progress tracking
- ✅ Modern dark theme

## 🏃 Running Locally

### Prerequisites
- Node.js 18+
- Python 3.10+
- pip

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start server
python manage.py runserver
```

Backend runs at: `http://localhost:8000`

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend runs at: `http://localhost:5173`

## 🌐 Deployment

### Backend (Render)

1. Push code to GitHub
2. Create a new Web Service on [Render](https://render.com)
3. Connect your GitHub repository
4. Configure:
   - **Build Command**: `./build.sh`
   - **Start Command**: `gunicorn backend.wsgi:application`
5. Add environment variables:
   - `SECRET_KEY`: Your Django secret key
   - `DEBUG`: `False`

### Frontend (Netlify)

1. Push code to GitHub
2. Connect repository to [Netlify](https://netlify.com)
3. Configure:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/dist`
4. Add environment variable:
   - `VITE_API_URL`: Your Render backend URL (e.g., `https://your-app.onrender.com/api`)

## 📁 Project Structure

```
Task Manager web app/
├── backend/
│   ├── backend/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── tasks/
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── serializers.py
│   │   └── urls.py
│   ├── manage.py
│   ├── requirements.txt
│   └── build.sh
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskInput.jsx
│   │   │   ├── TaskList.jsx
│   │   │   └── TaskItem.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── App.css
│   ├── package.json
│   └── netlify.toml
└── README.md
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks/` | List all tasks |
| POST | `/api/tasks/` | Create a new task |
| PATCH | `/api/tasks/:id/` | Update a task |
| DELETE | `/api/tasks/:id/` | Delete a task |

## ⚠️ Assumptions Made

1. **Authentication**: Not implemented - app is open access for demo purposes
2. **Database**: SQLite for simplicity; production should use PostgreSQL
3. **Task Fields**: Minimal (title, completed, timestamps) - can be extended
4. **Single User**: No user accounts - all tasks are shared

## 📝 License

MIT License