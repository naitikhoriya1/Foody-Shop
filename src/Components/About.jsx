import("../Styles/About.css");
import farmerpic from "../assets/asset2.jpeg";
import Features from "./Features.jsx";
function About() {
  return (
    <>
      <div className="about">
        <div className="about-image">
          <img src={farmerpic} alt="" />
        </div>
        <div className="about-text">
          <h1>
            Best Organic Fruits And <br />
            Vegetables
          </h1>
          <p>
            The first supermarket supposedly appeared on the American landscape
            in 1946. That is not very long ago. Until then, where was all the
            food? Dear folks, the food was in homes, gardens, local fields, and
            forests. - Joel Salatin
          </p>
          <ul>
            <li>I love fresh vegetables. I like fresh everything.</li>
            <li>Let food be thy medicine and medicine be thy food.</li>
            <li>There are no gardening mistakes, only experiments.</li>
          </ul>
          <button>Read More</button>
        </div>
      </div>
      <Features />
    </>
  );
}
export default About;
