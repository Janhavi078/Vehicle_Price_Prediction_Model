// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Nav from "./components/Nav";
// import Hero from "./components/Hero";
// import Predict from "./components/Predict";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Nav />

//       <Routes>
        
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <Footer />
//             </>
//           }
//         />

//         <Route path="/predict" element={<Predict />} />

//         <Route
//           path="/contact"
//           element={
//             <>
//               <Contact />
//               <Footer />
//             </>
//           }
//         />

//       </Routes>
//     </BrowserRouter>
//   );
// }
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Nav from "./components/Nav";
// import Hero from "./components/Hero";
// import Features from "./components/Features";   // ⭐ NEW
// import Predict from "./components/Predict";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Nav />

//       <Routes>
        
//         {/* HOME PAGE */}
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <Features />   {/* ⭐ Added safely */}
//               <Footer />
//             </>
//           }
//         />

//         {/* PREDICT PAGE */}
//         <Route path="/predict" element={<Predict />} />

//         {/* CONTACT PAGE */}
//         <Route
//           path="/contact"
//           element={
//             <>
//               <Contact />
//               <Footer />
//             </>
//           }
//         />

//       </Routes>
//     </BrowserRouter>
//   );
// }
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Predict from "./components/Predict";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08, // smoothness
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <Footer />
            </>
          }
        />

        <Route path="/predict" element={<Predict />} />

        <Route
          path="/contact"
          element={
            <>
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
