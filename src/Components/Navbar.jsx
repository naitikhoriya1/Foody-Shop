import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="Navbar-leftside">
          <h1>Foody🍔</h1>
        </div>
        <div className="Navbar-leftside">
          <a href="/" className="btn btn-link btn-color">
            Home
          </a>
          <a href="products" className="btn btn-link btn-color">
            Products
          </a>
          <a href="about" className="btn btn-link btn-color">
            About
          </a>
          <a href="contact" className="btn btn-link btn-color">
            Contact us
          </a>
          <a href="/Login" className="btn btn-link btn-color">
            Login
          </a>
          <a href="Signin" className="btn btn-link btn-color">
            Signup
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
