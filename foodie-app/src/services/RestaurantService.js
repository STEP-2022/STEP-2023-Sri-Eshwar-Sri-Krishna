import MockData from "../resources/data/mockData.json";

export class RestaurantService {
  static restaurantsData = null;

  /**
   * Function to fetch the restaurant data from service and assign it to restaurantData Static variable.
   */
  static async fetchRestaurantsData() {
    try {
      RestaurantService.restaurantsData = MockData;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Function to get the list of restaurants data
   * @returns restaurants list array
   */
  static async getRestaurantsList() {
    let restaurantsList = [];
    try {
      if (!RestaurantService.restaurantsData) {
        await RestaurantService.fetchRestaurantsData();
      }

      RestaurantService.restaurantsData.forEach(restaurant => {
        let restData = {
          id: restaurant.id,
          name: restaurant.name,
          reviews: restaurant.reviews,
          cuisines: restaurant.cuisines,
          rating: restaurant.rating,
          img: restaurant.feature_image
        };
        restaurantsList.push(restData);
      });
      console.log("getRestaurantsList returns", restaurantsList);
    } catch (err) {
      console.log(err);
    }

    return JSON.parse(JSON.stringify(restaurantsList));
  }

  /**
   * Function to get a specific restaurant detail
   * @param id - restaurant id
   * @returns restaurant detail
   */
  static async getRestaurantDetail(id) {
    let restaurantDetail = null;
    try {
      if (!RestaurantService.restaurantsData) {
        await RestaurantService.fetchRestaurantsData();
      }
      restaurantDetail = RestaurantService.restaurantsData.find(
        restaurant => id === restaurant.id
      );
      return JSON.parse(JSON.stringify(restaurantDetail));
    } catch (err) {
      console.log(err);
    }
    return restaurantDetail;
  }
}
