import "../Styles/Tester.css";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";

const Tester = () => {
  return (
    <div className="tester">
      <h2>Our Testimonial</h2>
      <h1>Our Client Saying!</h1>
      <div className="tester-main">
        <div className="client-card">
          <p>
            The meals are fresh, delicious, and well-balanced. I love the
            variety of healthy options available!
          </p>
          <div className="tester-profile">
            <div className="tester-profile-text">
              <h3>Jessica Winters</h3>
              <p>Alwar</p>
            </div>
            <img src={client3} alt="" />
          </div>
        </div>
        <div className="client-card">
          <p>The meals are fresh, delicious, and well-balanced. I love the</p>
          <div className="tester-profile">
            <div className="tester-profile-text">
              <h3>Michael Rivers</h3>
              <p>Bahadurpur</p>
            </div>
            <img src={client2} alt="" />
          </div>
        </div>
        <div className="client-card">
          <p>
            The website is easy to navigate, and I appreciate the detailed
            nutritional information provided for each meal.
          </p>
          <div className="tester-profile">
            <div className="tester-profile-text">
              <h3>Rohan Jangir</h3>
              <p>Mundawar</p>
            </div>
            <img src={client3} alt="" />
          </div>
        </div>
        <div className="client-card">
          <p>
            Customer support is responsive and helpful. They quickly resolved a
            minor issue I had with my order.
          </p>
          <div className="tester-profile">
            <div className="tester-profile-text">
              <h3>Amit</h3>
              <p>Alwar</p>
            </div>
            <img src={client4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tester;
