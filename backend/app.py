from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import os

app = Flask(__name__)
CORS(app)

MODEL_PATH = os.path.join("model", "car_price_model.pkl")

try:
    model = joblib.load(MODEL_PATH)
    print("✅ Model loaded successfully")
except Exception as e:
    print("❌ Model loading failed:", e)
    model = None


@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Vehicle Price Prediction API Running"})


@app.route("/predict", methods=["POST"])
def predict():
    try:
        if model is None:
            return jsonify({"error": "Model not loaded"}), 500

        data = request.get_json()

        # read safely
        car_name = data.get("Car_Name")
        year = data.get("Year")
        present_price = data.get("Present_Price")
        kms_driven = data.get("Kms_Driven")
        fuel_type = data.get("Fuel_Type")
        seller_type = data.get("Seller_Type")
        transmission = data.get("Transmission")
        owner = data.get("Owner")

        # ✅ validation (NO crash now)
        if not all([
            car_name, year, present_price,
            kms_driven, fuel_type,
            seller_type, transmission
        ]):
            return jsonify({"error": "Missing input fields"}), 400

        input_data = {
            "Car_Name": str(car_name),
            "Year": int(year),
            "Present_Price": float(present_price),
            "Kms_Driven": int(kms_driven),
            "Fuel_Type": str(fuel_type),
            "Seller_Type": str(seller_type),
            "Transmission": str(transmission),
            "Owner": int(owner)
        }

        input_df = pd.DataFrame([input_data])

        prediction = model.predict(input_df)

        return jsonify({
            "price": float(prediction[0])
        })

    except Exception as e:
        print("Prediction error:", e)
        return jsonify({"error": str(e)}), 400


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
