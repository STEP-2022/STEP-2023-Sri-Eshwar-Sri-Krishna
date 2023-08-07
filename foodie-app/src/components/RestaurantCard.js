import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/restaurantCardStyles.css";
import restPlaceHolder from "../resources/images/restPlaceholder.jpg";

const RestaurantCard = ({restaurant, onClick}) => {

  const navigate = useNavigate();

    return (
      <div
        className="restaurant-card"
        onClick={() =>
          navigate("/orders/" + restaurant.id)
        }
      >
        <img
          className="restaurant-logo"
          src={
            restaurant.img
              ? restaurant.img
              : restPlaceHolder
          }
          alt="restaurant pic"
        />
        <div className="restaurant-name wrap-text">
          {restaurant.name}
        </div>
        <div className="restaurant-desc wrap-text">
          {restaurant.cuisines}
        </div>
        <div className="restaurant-location">
          <i className="fas fa-map-marker-alt"></i>
          <span className="distance">{restaurant.rating}</span>
        </div>
        <div className="restaurant-review">{`${restaurant.reviews} reviews`}</div>
      </div>
    );
}

export default RestaurantCard;
