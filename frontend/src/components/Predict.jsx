// import { useState } from "react";
// import { motion } from "framer-motion";
// import BackgroundScene from "../components/BackgroundScene";
// import "../styles/predict.css";

// const carOptions = [
//   "ritz","sx4","ciaz","wagon r","swift","vitara brezza",
//   "s cross","alto k10","fortuner","innova","corolla altis",
//   "etios cross","i20","grand i10","verna","creta",
//   "city","brio","amaze","jazz",
//   "Royal Enfield Classic 350","KTM RC200","Bajaj Dominar 400"
// ];

// export default function Predict() {

//   const [form, setForm] = useState({
//     Car_Name: "",
//     Year: "",
//     Present_Price: "",
//     Kms_Driven: "",
//     Fuel_Type: "Petrol",
//     Seller_Type: "Dealer",
//     Transmission: "Manual",
//     Owner: "0"
//   });

//   const [price, setPrice] = useState(null);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handlePredict = async () => {
//     setError("");
//     setPrice(null);

//     for (let key in form) {
//       if (form[key] === "") {
//         setError("Please fill all fields");
//         return;
//       }
//     }

//     setLoading(true);

//     try {
//       const res = await fetch("http://localhost:5000/predict", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...form,
//           Year: Number(form.Year),
//           Present_Price: Number(form.Present_Price),
//           Kms_Driven: Number(form.Kms_Driven),
//           Owner: Number(form.Owner)
//         })
//       });

//       const data = await res.json();

//       if (data.error) setError(data.error);
//       else setPrice(data.price);

//     } catch {
//       setError("Backend not reachable");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="predict-page">

//       {/* 3D BACKGROUND */}
//       <BackgroundScene />

//       <motion.div
//         className="predict-container"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >

//         <h1>Vehicle Price Prediction</h1>

//         <select name="Car_Name" value={form.Car_Name} onChange={handleChange}>
//           <option value="">Select Vehicle</option>
//           {carOptions.map(car => (
//             <option key={car} value={car}>{car}</option>
//           ))}
//         </select>

//         <input name="Year" value={form.Year}
//           placeholder="Manufacturing Year"
//           onChange={handleChange}
//         />

//         <input name="Present_Price" value={form.Present_Price}
//           placeholder="Present Price (Lakh)"
//           onChange={handleChange}
//         />

//         <input name="Kms_Driven" value={form.Kms_Driven}
//           placeholder="Kms Driven"
//           onChange={handleChange}
//         />

//         <select name="Fuel_Type" value={form.Fuel_Type} onChange={handleChange}>
//           <option value="Petrol">Petrol</option>
//           <option value="Diesel">Diesel</option>
//           <option value="CNG">CNG</option>
//         </select>

//         <select name="Seller_Type" value={form.Seller_Type} onChange={handleChange}>
//           <option value="Dealer">Dealer</option>
//           <option value="Individual">Individual</option>
//         </select>

//         <select name="Transmission" value={form.Transmission} onChange={handleChange}>
//           <option value="Manual">Manual</option>
//           <option value="Automatic">Automatic</option>
//         </select>

//         <select name="Owner" value={form.Owner} onChange={handleChange}>
//           <option value="0">First Owner</option>
//           <option value="1">Second Owner</option>
//           <option value="2">Third Owner</option>
//         </select>

//         <motion.button
//           className="predict-btn"
//           onClick={handlePredict}
//           whileTap={{ scale: 0.97 }}
//         >
//           {loading ? "Analyzing..." : "Predict Price"}
//         </motion.button>

//         {price !== null && (
//           <motion.h2
//             className="predict-result"
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             Estimated Price: ₹ {price.toFixed(2)} Lakh
//           </motion.h2>
//         )}

//         {error && <p className="predict-error">{error}</p>}

//       </motion.div>
//     </div>
//   );
// }
import { useState } from "react";
import { motion } from "framer-motion";
import BackgroundScene from "../components/BackgroundScene";
import "../styles/predict.css";

const carOptions = [
  "ritz","sx4","ciaz","wagon r","swift","vitara brezza",
  "s cross","alto k10","fortuner","innova","corolla altis",
  "etios cross","i20","grand i10","verna","creta",
  "city","brio","amaze","jazz",
  "Royal Enfield Classic 350","KTM RC200","Bajaj Dominar 400"
];

export default function Predict() {

  const [form, setForm] = useState({
    Car_Name: "",
    Year: "",
    Present_Price: "",
    Kms_Driven: "",
    Fuel_Type: "Petrol",
    Seller_Type: "Dealer",
    Transmission: "Manual",
    Owner: "0"
  });

  const [price, setPrice] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePredict = async () => {
    setError("");
    setPrice(null);

    for (let key in form) {
      if (form[key] === "") {
        setError("Please fill all fields");
        return;
      }
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          Year: Number(form.Year),
          Present_Price: Number(form.Present_Price),
          Kms_Driven: Number(form.Kms_Driven),
          Owner: Number(form.Owner)
        })
      });

      const data = await res.json();

      if (data.error) setError(data.error);
      else setPrice(data.price);

    } catch {
      setError("Backend not reachable");
    }

    setLoading(false);
  };

  return (
    <div className="predict-page">

      {/* SAFE BACKGROUND */}
      <BackgroundScene />

      <div className="predict-layout">

        {/* LEFT SIDE */}
        <div className="predict-left">
          <h1>AI Vehicle Valuation</h1>
          <p>
            Predict accurate resale value using machine learning.
            AutoAI analyzes vehicle age, usage and market data
            to estimate realistic pricing instantly.
          </p>
        </div>

        {/* RIGHT SIDE CARD */}
        <motion.div
          className="predict-container"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="predict-title">Vehicle Price Prediction</h2>

          <select name="Car_Name" value={form.Car_Name} onChange={handleChange}>
            <option value="">Select Vehicle</option>
            {carOptions.map(car => (
              <option key={car} value={car}>{car}</option>
            ))}
          </select>

          <input name="Year" value={form.Year}
            placeholder="Manufacturing Year"
            onChange={handleChange}
          />

          <input name="Present_Price" value={form.Present_Price}
            placeholder="Present Price (Lakh)"
            onChange={handleChange}
          />

          <input name="Kms_Driven" value={form.Kms_Driven}
            placeholder="Kms Driven"
            onChange={handleChange}
          />

          <select name="Fuel_Type" value={form.Fuel_Type} onChange={handleChange}>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="CNG">CNG</option>
          </select>

          <select name="Seller_Type" value={form.Seller_Type} onChange={handleChange}>
            <option value="Dealer">Dealer</option>
            <option value="Individual">Individual</option>
          </select>

          <select name="Transmission" value={form.Transmission} onChange={handleChange}>
            <option value="Manual">Manual</option>
            <option value="Automatic">Automatic</option>
          </select>

          <select name="Owner" value={form.Owner} onChange={handleChange}>
            <option value="0">First Owner</option>
            <option value="1">Second Owner</option>
            <option value="2">Third Owner</option>
          </select>

          <motion.button
            className="predict-btn"
            onClick={handlePredict}
            whileTap={{ scale: 0.97 }}
          >
            {loading ? "Analyzing..." : "Predict Price"}
          </motion.button>

          {price !== null && (
            <motion.h2
              className="predict-result"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Estimated Price: ₹ {price.toFixed(2)} Lakh
            </motion.h2>
          )}

          {error && <p className="predict-error">{error}</p>}

        </motion.div>
      </div>
    </div>
  );
}
