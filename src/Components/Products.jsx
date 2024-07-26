import "aos/dist/aos.css";
import AOS from "aos";
import "../Styles/Products.css";
import { useState, useEffect } from "react";

function Products() {
  AOS.init({});

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="products-page">
      <div className="products-header">
        <h1> Our Products 🍓</h1>
        <h3>Home / Products page</h3>
      </div>
      {data.map((product) => (
        <div key={product._id} data-aos="zoom-in-up" className="animation">
          <div className="products-image">
            <img width={"300px"} height={"200px"} src={product.image_url} alt="product-image" />
          </div>
          <div className="about-products">
            <div className="product-name">
              <h5>{product.name}</h5>
              <p>
                {" "}
                <b>Price: {product.price}</b>
              </p>
            </div>
            <div className="product-discriptions">
              <p>{product.description}</p>
            </div>
            <div className="product-btn">
              <button>BUY</button>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
