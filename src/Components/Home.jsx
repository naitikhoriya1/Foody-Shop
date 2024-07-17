import "../Styles/Home.css";
import About from "./About.jsx";
function Home() {
  return (
    <>
      <div className="home">
        <div className="hero">
          <h1 className="hero-text">
            Natural Food is <br /> Always Healthy
          </h1>
          <button className="button-17" role="button">
            Order Now
          </button>
        </div>
      </div>
      <About />
    </>
  );
}
export default Home;
