import "aos/dist/aos.css";
import AOS from "aos";
import "../Styles/Products.css";

function Products() {
  AOS.init({});

  return (
    <>
      <div className="products-page">
        <div className="products-header">
          <h1> Our Products 🍓</h1>
          <h3>Home / Products page</h3>
        </div>
        <div data-aos="zoom-in-up" className="animation">
          <div className="products-image"></div>
          
        </div>
      </div>
    </>
  );
}

export default Products;
