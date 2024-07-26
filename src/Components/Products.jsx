import "aos/dist/aos.css";
import AOS from "aos";
import "../Styles/Products.css";
import { useState, useEffect } from "react";
import Footer from "./Footer.jsx";
import AddCart from "./AddCard.jsx";

function Products() {
  AOS.init({});

  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error(error));
  }, []);
  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
    setIsCartOpen(true); // Open the cart sidebar when an item is added
  };

  return (
    <>
      <div className="products-page">
        <div className="products-header">
          <h1> Our Products 🍓</h1>
          <h3>Home / Products page</h3>
          {/* <AddCart /> */}
        </div>

        <div className="products-grid">
          {data.map((product) => (
            <div key={product._id} data-aos="zoom-in-up" className="animation">
              <div className="products-image">
                <img
                  className="products-image-img"
                  width={"300px"}
                  height={"200px"}
                  src={product.image_url}
                  alt="product-image"
                />
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
      </div>
      {/* <AddCart
        cartItems={cartItems}
        isOpen={isCartOpen}
        toggleCart={() => setIsCartOpen(!isCartOpen)}
      /> */}
      <Footer />
    </>
  );
}

export default Products;
