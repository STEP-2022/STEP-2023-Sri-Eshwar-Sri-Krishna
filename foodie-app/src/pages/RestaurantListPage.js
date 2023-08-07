import { useEffect, useState } from "react";
import "../styles/restaurantListPageStyles.css";
import HeaderBar from "../components/HeaderBar";
import { RestaurantService } from "../services/RestaurantService";
import RestaurantCard from "../components/RestaurantCard";

const RestaurantListPage = () => {

  const [restaurantState, setRestaurantState ]= useState({
    isLoading: false,
    data: [],
    error: null
  })

  /**
 * Fetch the list of restaurants from RestaurantService and updates the component state.
 * Sets the state to display loading indicator during data fetch from service.
 */
  async function fetchRestaurantList() {
    setRestaurantState({...restaurantState, isLoading:true})
    let restaurantsList = await RestaurantService.getRestaurantsList();
    if (restaurantsList.length > 0) {
      setRestaurantState({
        isLoading: false,
        data: restaurantsList,
        error: null
      });
      console.log(restaurantState);
    } else {
      setRestaurantState({
        isLoading: false,
        data: restaurantsList,
        error: "No Data Present!"
      });
    }
  }

  useEffect(() => {
    fetchRestaurantList();
  }, [])


  return (
    <div className="restaurant-list-container">
      <HeaderBar />
      <div className="restaurant-list-wrapper child">
        {restaurantState.data.map(res => {
          return (
            <div>
              <RestaurantCard
                key={res.id}
                restaurant={res}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RestaurantListPage;
