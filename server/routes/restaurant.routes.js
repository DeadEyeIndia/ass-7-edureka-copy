const express = require("express");
const router = express.Router();
const {
  getAllRestaurant,
  getRestaurantTypes,
  getRestaurantDetails,
} = require("../controller/restaurant.controller");

// Restaurant Controller --> restaurant.controller
router.route("/getAllRestaurant").get(getAllRestaurant);
router.route("/restaurantType").get(getRestaurantTypes);
router.route("/details/overview/:id").get(getRestaurantDetails);

module.exports = router;
