import "../Styles/CartSidebar.css";

function CartSidebar({ cartItems, isOpen, toggleCart }) {
  return (
    <>
      <div className={`cart-icon ${isOpen ? "open" : ""}`} onClick={toggleCart}>
        <span className="badge">{cartItems.length}</span>
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      </div>
      <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
        <h4>
          <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart
        </h4>
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item._id} className="cart-item">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">${item.price}</div>
                </div>
              </div>
            ))
          )}
          <div className="buy-btn">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartSidebar;
