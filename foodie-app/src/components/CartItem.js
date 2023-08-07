import React from "react";
import "../styles/cartItemStyles.css";

const CartItem = ({ item, onIncrement, onDecrement }) => {
  return (
    <div className="item-container">
      <div className="item-title">{item.name}</div>
      <div className="item-content">
        <div className="content-left spinner">
          <span>
            <button type="button" onClick={() => onDecrement(item)}>
              -
            </button>
          </span>
          <span>
            <input type="text" value={item.quantity} readOnly />
          </span>
          <span>
            <button type="button" onClick={() => onIncrement(item)}>
              +
            </button>
          </span>
        </div>
        <div className="content-right cost">
          <i className="fas fa-rupee-sign"></i>
          <span id="item1Cost" data="100">
            {item.price * item.quantity}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
