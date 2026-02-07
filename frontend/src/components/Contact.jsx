// import React from "react";
// import Background3D from "./Background3D";
// import "../styles/contact.css";

// export default function Contact() {
//   return (
//     <section className="contact-section">

//       <div className="three-bg">
//         <Background3D />
//       </div>

//       <div className="contact-container">
//         <h1 className="contact-heading">Get In Touch</h1>

//         <form className="contact-form">

//           <div className="input-group">
//             <input type="text" required />
//             <label>Name</label>
//           </div>

//           <div className="input-group">
//             <input type="email" required />
//             <label>Email</label>
//           </div>

//           <div className="input-group">
//             <textarea rows="4" required></textarea>
//             <label>Message</label>
//           </div>

//           <button className="contact-btn">Send Message</button>

//         </form>
//       </div>

//     </section>
//   );
// }
import React from "react";
import { motion } from "framer-motion"; // Install via: npm install framer-motion
import Background3D from "./Background3D";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="three-bg">
        <Background3D />
      </div>

      <motion.div 
        className="contact-container"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="contact-heading">Drive Your Future</h1>
        <p className="contact-subtext">Connect with AutoAI for the next generation of automotive intelligence.</p>

        <form className="contact-form">
          <div className="input-group">
            <input type="text" required />
            <label>Full Name</label>
            <div className="input-line"></div>
          </div>

          <div className="input-group">
            <input type="email" required />
            <label>Email Address</label>
            <div className="input-line"></div>
          </div>

          <div className="input-group">
            <textarea rows="4" required></textarea>
            <label>Message</label>
            <div className="input-line"></div>
          </div>

          <motion.button 
            className="contact-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}