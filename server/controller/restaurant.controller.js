const Restaurant = require("../models/restaurant.model");
const RestaurantType = require("../models/restaurantType.model");

exports.getAllRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.find();
    res.status(200).send({
      success: true,
      restaurant,
    });
  } catch (err) {
    res.status(400).send({
      success: true,
      message: error,
    });
  }
};

exports.getRestaurantTypes = async (req, res) => {
  try {
    const restaurantType = await RestaurantType.find();
    res.status(200).send({
      success: true,
      restaurantType,
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      message: error,
    });
  }
};

exports.getRestaurantDetails = async (req, res) => {
  try {
    const restaurantTypeDetails = await RestaurantType.findById(req.params.id);

    res.status(200).send({
      success: true,
      restaurantTypeDetails,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error,
    });
  }
};
