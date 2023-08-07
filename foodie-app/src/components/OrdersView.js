import React, { Component } from "react";
import OrderItem from "./OrderItem";
import "../styles/ordersViewStyles.css";

const OrdersView = ({ restaurant, onAddToCart } ) => {
    return (
      <div className="items">
        <div className="restaurant">
          <div className="child">
            <h1 className="title">{restaurant.name}</h1>
            <div className="address">{restaurant.address}</div>
            <div className="address">{restaurant.cuisines}</div>
          </div>
        </div>
        <div className="order-items">
          <div className="child">
            <h1 className="title">Order Now</h1>
            {restaurant.menu
              ? restaurant.menu.map((item, index) => (
                  <OrderItem
                    key={index}
                    item={item}
                    onAddToCart={onAddToCart}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    );
}

export default OrdersView;
