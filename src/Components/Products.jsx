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
          <div className="products-image">
            <img
              src={
                "https://tse2.mm.bing.net/th?id=OIP.kAR0YfIVMOtMldlUxErYyQHaEo&pid=Api&P=0&h=180"
              }
              alt="product-image"
            />
          </div>
          <div className="about-products">
            <div className="product-name">
              <h5>Product Name</h5>
              <p>
                {" "}
                <b>price : product price </b>
              </p>
            </div>

            <div className="product-discriptions">
              <p>Lorem ipsum dolor sit amet conm</p>
            </div>
            <div className="product-btn">
              <button>BUY</button>
              <button>Add 2 Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
