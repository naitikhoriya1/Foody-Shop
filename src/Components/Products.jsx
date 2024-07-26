import "aos/dist/aos.css";
import AOS from "aos";
import "../Styles/Products.css";
import { useState, useEffect } from "react";
import Footer from "./Footer.jsx";

function Products() {
  AOS.init({});

  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]); // add a cart state

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error(error));
  }, []);

  const handleBuy = (product) => {
    fetch('http://localhost:5000/add-to-cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId: product._id }),
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

    setCart([...cart, product]);
    alert("Product added to cart!");
  };

  return (
    <>
      <div className="products-page">
        <div className="products-header">
          <h1> Our Products 🍓</h1>
          <h3>Home / Products page</h3>
        </div>
        <div className="products-grid">
          {data.map((product) => (
            <div key={product._id} data-aos="zoom-in-up" className="animation">
              <div className="products-image">
                <img width={"300px"} height={"200px"} src={product.image_url} alt="product-image" />
              </div>
              <div className="about-products">
                <div className="product-name">
                  <h5>{product.name}</h5>
                  <p> {" "} <b>Price: {product.price}</b> </p>
                </div>
                <div className="product-discriptions">
                  <p>{product.description}</p>
                </div>
                <div className="product-btn">
                  <button onClick={() => handleBuy(product)}>BUY</button>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;


