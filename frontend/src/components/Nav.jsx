import { Link } from "react-router-dom";
import "../styles/Nav.css";

export default function Nav() {
  return (
    <nav className="nav">

      {/* Logo */}
      <div className="logo">
        <Link to="/">AutoAI</Link>
      </div>

      {/* Links */}
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/predict">Price Prediction</Link>
        <Link to="/contact">Contact</Link>
      </div>

    </nav>
  );
}
