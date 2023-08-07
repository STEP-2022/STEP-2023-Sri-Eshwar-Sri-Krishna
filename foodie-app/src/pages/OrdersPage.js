import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ordersPageStyles.css";
import HeaderBar from "../components/HeaderBar";
import { RestaurantService } from "../services/RestaurantService";
import OrdersView from "../components/OrdersView";
import CartView from "../components/CartView";

const OrdersPage = () => {

  const {id} = useParams();

  const [orderState, setOrderState] = useState({
    restaurant: {},
    cart: {
      items: [],
      subTotal: 0,
      deliveryCharges: 45,
      coupon: 90,
      grandTotal: 0
    }
  });


  /**
   * Fetch the restaurant details from RestaurantService and updates the component state.
   * Sets the state to display loading indicator during data fetch from service.
   */
  async function fetchRestaurantDetails(id) {
    setOrderState({ ...orderState ,isLoading: true });
    let restaurantDetails = await RestaurantService.getRestaurantDetail(id);
    if (restaurantDetails) {
      setOrderState({
        ...orderState,
        isLoading: false,
        restaurant: restaurantDetails,
        error: null
      });
    } else {
      setOrderState({
        ...orderState,
        isLoading: false,
        restaurant: null,
        error: "Restaurant detail not found!"
      });
    }
  }


  useEffect(() => {
    fetchRestaurantDetails(id);
  }, [])


  const handleAddToCart = (item) => {
    let cart = { ...orderState?.cart };

    // If an element is already present increment otherwise add to cart
    let itemPresent = cart.items.findIndex(element => element.id === item.id);
    if (itemPresent >= 0) {
      handleIncrement(item);
    } else {
      const newItem = { ...item, quantity: 1 };
      cart.items.push(newItem);
      calculateTotal(cart);
    }
  };

  const calculateTotal = cart => {
    //Calculate Totals and update
    cart.subTotal = 0;
    for (let item of cart.items) {
      cart.subTotal = cart.subTotal + item.price * item.quantity;
    }
    cart.grandTotal = cart.subTotal + cart.deliveryCharges - cart.coupon;
    cart.grandTotal = cart.grandTotal > 0 ? cart.grandTotal : 0;
    setOrderState({...orderState, cart });
  };

  const handleIncrement = item => {
    let cart = { ...orderState.cart };
    let newItems = [...orderState.cart.items];

    //Update the item in cart
    newItems[newItems.findIndex(element => element.id === item.id)].quantity++;
    cart.items = newItems;
    calculateTotal(cart);
  };

  const handleDecrement = item => {
    let cart = { ...orderState.cart };
    let newItems = [...orderState.cart.items];

    //Update the item in cart
    if (item.quantity !== 1) {
      newItems[newItems.findIndex(element => element.id === item.id)]
        .quantity--;
    } else {
      newItems.splice(
        newItems.findIndex(element => element.id === item.id),
        1
      );
    }
    cart.items = newItems;
    calculateTotal(cart);
  };

    return (
      <div className="main-container order-page">
        <HeaderBar />
        <div className="order">
          <OrdersView
            restaurant={orderState.restaurant}
            onAddToCart={handleAddToCart}
          />
          <CartView
            cart={orderState.cart}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        </div>
      </div>
    );
  }
export default OrdersPage;
