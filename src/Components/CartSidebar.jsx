import React from 'react';
import '../Styles/CartSidebar.css';

function CartSidebar({ cartItems, isOpen, toggleCart }) {
  return (
    <>
      <div className={`cart-icon ${isOpen ? 'open' : ''}`} onClick={toggleCart}>
        <span className="badge">{cartItems.length}</span>
        <i className='fa fa-shopping-cart'></i>
      </div>
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <h4><i className='fa fa-shopping-cart'>  Cart</i></h4>
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index}>{item.name}</div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default CartSidebar;
