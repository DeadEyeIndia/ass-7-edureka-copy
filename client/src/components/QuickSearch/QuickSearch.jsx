import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";

import QuickSearchRestaurant from "../QuickSearchRestaurant/QuickSearchRestaurant";
import logo from "../../images/logo1.png";
import "./QuickSearch.css";

const QuickSearch = () => {
  const [quickRest, setQuickRest] = React.useState([]);

  const getQuickRest = () => {
    axios.get("http://localhost:3010/v1/restaurantType").then((response) => {
      /* console.log(response); */
      const myRest = response.data;
      setQuickRest(myRest);
    });
  };

  React.useEffect(() => getQuickRest(), []);
  return (
    <>
      <div className="quick-search">
        <div className="login-create-account">
          <div className="login">Login</div>
          <div className="create">Create an account</div>
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="quick-search-header">
          <h1>Find the restaurants, cafes and bars</h1>
        </div>
        <div className="quick-location-search">
          <div className="quick-location">
            <form>
              <input
                type="text"
                placeholder="Please type a location"
                className="location-input"
              />
            </form>
          </div>
          <div className="quick-search-box">
            <div className="search-icon">
              <SearchOutlined style={{ color: "#636f88", fontSize: "20px" }} />
            </div>
            <form>
              <input
                type="text"
                placeholder="Please type a location"
                className="location-search"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="app__quick-search">
        <h1 className="app__quick-search_head">Quick Searches</h1>
        <p className="app__quick-search_text">
          Discover restaurants by type of meal
        </p>
        <div className="app__quick-search_types">
          {quickRest.restaurantType?.map((restType) => (
            <QuickSearchRestaurant restType={restType} key={restType._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default QuickSearch;
