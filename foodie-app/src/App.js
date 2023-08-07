import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RestaurantListPage from "./pages/RestaurantListPage";
import OrdersPage from "./pages/OrdersPage";

function App() {
  return (

    <Routes>
      <Route exact path={"/"} element={<LoginPage />}></Route>
      <Route
        exact
        path={"/restaurantList"}
        element={<RestaurantListPage />}
      ></Route>
      <Route
        path={"/orders/:id"}
        element={<OrdersPage />}
      ></Route>
    </Routes>
  );
}

export default App;
