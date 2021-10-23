import React from "react";
import "./cart-item.scss";
const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <p className="name">{name}</p>
      <span>
        {quantity} x ${price}
      </span>
    </div>
  </div>
);
export default CartItem;
