// import React from "react";
// import { motion } from "framer-motion";
// import Features3D from "./Features3D";
// import "../styles/features.css";

// const featureData = [
//   { title: "🚗 Smart Price Prediction", desc: "AI analyzes vehicle data to predict accurate resale value." },
//   { title: "📊 Market Insights", desc: "Understand depreciation trends and vehicle demand patterns." },
//   { title: "⚡ Instant Evaluation", desc: "Get price valuation instantly using machine learning." }
// ];

// export default function Features() {
//   return (
//     <section className="features">
//       <div className="features-container">
        
//         {/* LEFT 3D SECTION */}
//         <motion.div 
//           className="features-3d"
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <Features3D />
//         </motion.div>

//         {/* RIGHT CARDS SECTION */}
//         <div className="features-cards">
//           {featureData.map((feature, index) => (
//             <motion.div 
//               className="feature-card"
//               key={index}
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2, duration: 0.6 }}
//               whileHover={{ scale: 1.02 }}
//             >
//               <div className="card-glow" />
//               <h3>{feature.title}</h3>
//               <p>{feature.desc}</p>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }
import React from "react";
import { motion } from "framer-motion";
import Features3D from "./Features3D";
import "../styles/features.css";

const featureData = [
  {
    title: " Smart Price Prediction",
    desc: "AI analyzes vehicle data to predict accurate resale value."
  },
  {
    title: "Market Insights",
    desc: "Understand depreciation trends and vehicle demand patterns."
  },
  {
    title: " Instant Evaluation",
    desc: "Get price valuation instantly using machine learning."
  }
];

export default function Features() {
  return (
    <section className="features">
      <div className="features-container">

        {/* LEFT 3D MODEL */}
        <motion.div
          className="features-3d"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Features3D />
        </motion.div>

        {/* RIGHT FEATURE CARDS */}
        <div className="features-cards">
          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"

              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                ease: "easeOut"
              }}

              whileHover={{ scale: 1.02 }}

              /* Mouse spotlight effect */
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty(
                  "--x",
                  `${e.clientX - rect.left}px`
                );
                e.currentTarget.style.setProperty(
                  "--y",
                  `${e.clientY - rect.top}px`
                );
              }}
            >
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
