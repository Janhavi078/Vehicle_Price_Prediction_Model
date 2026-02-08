🌟 Project Overview

This project demonstrates how a Machine Learning model can be integrated into a real-world web application.

Users enter vehicle details through a modern React interface, the data is sent to a Flask backend API, and the trained ML model predicts the estimated selling price instantly.

This project focuses on:

Machine Learning integration with web applications

Backend API development

Frontend interaction with ML systems

Docker-based deployment

Clean project architecture

🧠 Machine Learning Details

The prediction model is trained using vehicle features such as:

Car Name

Manufacturing Year

Present Price

Kilometers Driven

Fuel Type

Seller Type

Transmission

Owner Count

ML Pipeline Includes

Data preprocessing

Categorical encoding

Feature preparation

Regression model training

Model serialization using Joblib (.pkl)

The trained model is served through a Flask API.

🏗 System Architecture
React Frontend  →  Flask API  →  ML Model (.pkl)
       │               │             │
       │               └── Prediction Logic
       │
       └── User Input & Result Display

🛠 Tech Stack
Layer	Technologies
Frontend	React, Vite, CSS
Backend	Python, Flask
Machine Learning	Scikit-Learn
Data Processing	Pandas, NumPy
Model Storage	Joblib
Containerization	Docker
API	REST (JSON)
Version Control	Git & GitHub
📂 Project Structure
Vehicle_Price_Prediction_Model/
│
├── backend/
│   ├── model/
│   │   └── car_price_model.pkl
│   ├── app.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Predict.jsx
│   │   ├── styles/
│   │   │   └── Predict.css
│   │   └── App.jsx
│   └── package.json
│
├── dockerfile
├── docker-compose.yml
├── .gitignore
└── README.md

🚀 Running the Project Locally
1️⃣ Clone Repository
git clone https://github.com/Janhavi078/Vehicle_Price_Prediction_Model.git
cd Vehicle_Price_Prediction_Model

2️⃣ Run Backend (Flask)
cd backend
pip install -r requirements.txt
python app.py


Backend runs at:

http://localhost:5000

3️⃣ Run Frontend (React)
cd frontend
npm install
npm run dev


Frontend runs at:

http://localhost:5173

🐳 Running with Docker

Build and run backend container:

docker build -t vehicle-backend .
docker run -p 5000:5000 vehicle-backend

🔌 API Endpoint
POST /predict
Request
{
  "Car_Name": "ritz",
  "Year": 2014,
  "Present_Price": 4.5,
  "Kms_Driven": 50000,
  "Fuel_Type": "Petrol",
  "Seller_Type": "Dealer",
  "Transmission": "Manual",
  "Owner": 0
}

Response
{
  "price": 3.85
}

🎯 Future Improvements

Model performance optimization

Multiple ML model comparison

CI/CD pipeline integration

Cloud deployment (AWS / Render)

Authentication system

Advanced UI animations

Prediction history dashboard

👩‍💻 Author

Janhavi Kashyap & ujjwal singh
Web Developer | Machine Learning Enthusiast

Building real-world AI-powered applications using modern web technologies.
