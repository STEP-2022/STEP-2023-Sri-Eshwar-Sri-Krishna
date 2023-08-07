import React from "react";
import CartItem from "./CartItem";
import CommonButton from "../components/CommonButton";
import "../styles/cartViewStyles.css";

const CartView = ( { cart, onIncrement, onDecrement } ) => {

  return (
    <div className="my-cart">
      <form className="order-form" action="">
        <h3 className="title">My Cart</h3>
        {cart.items
          ? cart.items.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
              />
            ))
          : null}

        <div className="total-container">
          <div className="item-content bold">
            <div className="content-left">Sub Total</div>
            <div className="content-right">
              <i className="fas fa-rupee-sign"></i> {cart.subTotal}
            </div>
          </div>
          <div className="item-content">
            <div className="content-left">Delivery Charges</div>
            <div className="content-right">{cart.deliveryCharges}</div>
          </div>
          <div className="item-content">
            <div className="content-left">Coupon (SUPER)</div>
            <div className="content-right">-{cart.coupon}</div>
          </div>
          <div className="item-content bold">
            <div className="content-left">Grand Total</div>
            <div className="content-right">
              <i className="fas fa-rupee-sign"></i> {cart.grandTotal}
            </div>
          </div>
        </div>
        <div className="form-field">
          <CommonButton className="primary" type="submit" value="PAY NOW" />
        </div>
      </form>
    </div>
  );
}

export default CartView;
