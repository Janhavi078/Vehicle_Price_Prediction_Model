// import "../styles/hero.css";
// import car from "../assets/car.png";
// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="hero">

//       {/* FULL BACKGROUND CAR */}
//       <img src={car} className="hero-bg-car" />

//       {/* TEXT OVERLAY */}
//       <div className="hero-overlay">

//         <motion.h1
//           initial={{ opacity: 0, x: -80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Vehicle Price Prediction
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, x: -60 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//         >
//           AI-powered market valuation
//         </motion.p>

//         <motion.button
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//         >
//           Check Price
//         </motion.button>

//       </div>
//     </section>
//   );
// }
import "../styles/Hero.css";
import HeroBackground from "./HeroBackground";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <div className="three-js-container">
        <HeroBackground />
      </div>

      <div className="hero-overlay">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Vehicle Price <br /> <span>Prediction</span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Precision AI for the modern collector.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(37, 99, 235, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Check Price
          </motion.button>
        </motion.div>
      </div>
      
      {/* Professional Detail: Animated Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      />
    </section>
  );
}
