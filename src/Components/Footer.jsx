import "../Styles/Footer.css";
import phonepe from "../assets/phone.jpeg";
import gpay from "../assets/gpay.jpeg";
import paytm from "../assets/paytm.jpeg";
import visa from "../assets/visa.jpeg";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-heading">
          <div className="footer-header">
            <h2>CravHealthy</h2>
          </div>
          <div className="subscribe-div">
            <div className="email-input-div">
              <input type="email" placeholder="enter email" />
            </div>
            <div className="subscribe-button">
              <button>Subscribe Now</button>
            </div>
          </div>
        </div>
        <div className="footer-items">
          <div className="address">
            <h5>Address</h5>
            <div className="line-div"></div>
            <div className="address-details">
              <p>Alwar-Tijara-Delhi Highway</p>
              <p>Chikani, Alwar, Rajasthan</p>
              <p>India – 301028</p>
            </div>
          </div>
          <div className="quicklinks">
            <h5>Quick Links</h5>
            <div className="line-div"></div>
            <div className="quicklinks-items">
              <a href="/">Home</a>
              <a href="about">About US</a>
              <a href="products">Products</a>
            </div>
          </div>
          <div className="updates">
            <h5>Contact</h5>
            <div className="line-div"></div>
            <div className="contact-details">
              <p>Email : cravhealthy@gmail.com</p>
              <p>Phone No: 1234567890</p>
              <p>Payment Accepted</p>
              <div className="contact-image">
                <img src={phonepe} alt="" />
                <img src={gpay} alt="" />
                <img src={paytm} alt="" />
                <img src={visa} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="line-div"></div>
       <div className="copyright">
      
          <div className="copyright-div">
          <p>&copy; copyright, 2024</p>
          </div>
          <div className="follow-page">
            <p>Follow us </p>
            <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook" id="facebook"></i></a>
            <a href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram" id="instagram"></i></a>
            <a href="https://x.com/" target="_blank"><i class="fa fa-twitter" id="twitter"></i></a>
            </div>
          </div>
    
       </div>
    </>
  );
}

export default Footer;
