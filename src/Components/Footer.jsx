import "../Styles/Footer.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-top">
          <h2>Cravhealthy</h2>
          <div>
            <input type="text" placeholder="Your Email " />
            <button>Subscribe Now</button>
          </div>
        </div>
        <div className="address">address</div>
        <div className="quicklinks">quicklinks</div>
        <div className="updates">updates</div>
      </div>
    </>
  );
}

export default Footer;
