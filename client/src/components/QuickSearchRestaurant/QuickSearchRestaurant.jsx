import React from "react";
import { Link } from "react-router-dom";

import "./QuickSearchRestaurant.css";

const QuickSearchRestaurant = ({ restType }) => {
  return (
    <>
      <Link
        className="app__quick-search_card"
        key={restType._id}
        to={`/details/overview/${restType._id}`}
      >
        <img src={restType.image} alt="" />
        <div className="app__quick-search_type-title-text">
          <div className="app__quick-search_title">{restType.name}</div>
          <div className="app__quick-search_type-text">
            {restType.description}
          </div>
        </div>
      </Link>
    </>
  );
};

export default QuickSearchRestaurant;
