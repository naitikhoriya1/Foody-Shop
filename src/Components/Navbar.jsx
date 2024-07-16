import "../Styles/Navbar.css";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="Navbar-leftside">
          <h1>Foody🍔</h1>
        </div>
        <div className="Navbar-leftside">
          <a href="#home" className="btn btn-design">
            Home
          </a>
          <a href="#products" className="btn btn-design">
            Products
          </a>
          <a href="#about" className="btn btn-design">
            About
          </a>
          <a href="#contact" className="btn btn-design">
            Contact us
          </a>
          <a href="#login" className="btn btn-design">
            Login
          </a>
          <a href="#signup" className="btn btn-design">
            Signup
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
