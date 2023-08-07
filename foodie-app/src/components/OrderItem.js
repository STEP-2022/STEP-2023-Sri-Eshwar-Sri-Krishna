import React from "react";
import "../styles/orderItemStyles.css";

const OrderItem = ({ item, onAddToCart }) => {

  return (
    <div className="item-container">
      <h3 className="item">{item.name}</h3>
      <div className="description">
        <div className="content">{item.desc}</div>
        <div className="action">
          <button onClick={() => onAddToCart(item)} className="add-to-cart">
            ADD
          </button>
        </div>
      </div>
      <div className="cost">
        <i className="fas fa-rupee-sign"></i> {item.price}
      </div>
    </div>
  );
}

export default OrderItem;
