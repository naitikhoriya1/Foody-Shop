import "../Styles/Features.css";
import "aos/dist/aos.css";
import AOS from "aos";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
function Features() {
  AOS.init({ duration: 1000 });
  return (
    <>
      <div className="features-page">
        <div className="features-head">
          <div className="features-heading">
            <h1>Our Features</h1>
            <p>
              Experience the taste of fresh, locally-sourced ingredients. <br />
              <b>With Quick Delivery:🍓</b>
            </p>
          </div>
        </div>
        <div data-aos="zoom-in-up" className="features-cards">
          <div className="features-card-1">
            <img src={feature1} alt="feature1" />
            <h2>Natural Process</h2>
            <p>
              Experience the true essence of flavor with ingredients sourced
              straight from the earth.
            </p>
            <button>Read more</button>
          </div>
          <div className="features-card-1">
            <img src={feature2} alt="feature2" />
            <h2>Organic Products</h2>
            <p>
              Foody's commitment to organic farming ensures you enjoy food
              that's as nutritious as it is delicious.
            </p>
            <button>Read more</button>
          </div>
          <div className="features-card-1">
            <img src={feature3} alt="feature3" />
            <h2>Biologically Safe</h2>
            <p>
              At Foody, we prioritize biological safety, so you can enjoy
              wholesome meals with confidence.
            </p>
            <button>Read more</button>
          </div>
        </div>
        <div className="whychooseus">
          <h1>Why Choose Us 🙄?</h1>
          <p className="whychoose-us">
            Our platforms come equipped with all the essential features you need
            for a successful delivery service:
          </p>
          <div className="whychooseus-cards">
            <div className="one-customer">
              <h2>99%</h2>
              <p>Successful delivary</p>
            </div>
            <div className="one-customer">
              <h2>10000+</h2>
              <p>Happy Customers</p>
            </div>
            <div className="one-customer">
              <h2>100+</h2>
              <p>Delivary Agents</p>
            </div>
            <div className="one-customer">
              <h2>140+</h2>
              <p>Daily Visitors</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Features;
