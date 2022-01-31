import React from "react";

const Overview = () => {
  return (
    <>
      <div className="app__details-overview_detail" to="/overview">
        <h2>About this place</h2>
        <div className="app__details-overview_detail-cuisine">
          <h4>Cuisine</h4>
          <p>Bakery, Fast-food</p>
        </div>
        <div className="app__details-overview_detail-average">
          <h4>Average Cost</h4>
          <p>&#8377;700 for two people (approx.)</p>
        </div>
      </div>
    </>
  );
};

export default Overview;
