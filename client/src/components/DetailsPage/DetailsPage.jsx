import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import HeadLoginCreate from "../HeadLogin/HeadLoginCreate";
import Overview from "./Overview";

import "./DetailsPage.css";

const DetailsPage = () => {
  const { id } = useParams();

  const [restDetails, setRestDetails] = React.useState({});

  React.useEffect(() => {
    const getRestDetails = (id) => {
      axios
        .get(`http://localhost:3010/v1/details/overview/${id}`)
        .then((detail) => {
          const myDetail = detail.data;
          setRestDetails(myDetail);
        })
        .catch((err) => console.log(err));
    };

    getRestDetails(id);
  }, [id]);

  return (
    <>
      <HeadLoginCreate />
      <div className="app__details">
        <div className="app__details-image">
          <img src={restDetails.restaurantTypeDetails?.image} alt="" />
          <div className="app__details-image_open">
            Click to see Image Gallery
          </div>
        </div>
        <div className="app__details-detail">
          <h1>The Big Chill Cakery</h1>
          <div className="app__details-overview_contact-order_place">
            <div className="app__details-overview_contact">
              <div className="app__details-overview active">Overview</div>
              <div className="app__details-contact">Contact</div>
            </div>
            <div className="app__details-order_place">
              <button className="custom-button">Place Online Order</button>
            </div>
          </div>
          <Overview />
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
