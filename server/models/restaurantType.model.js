const mongoose = require("mongoose");

const restaurantTypeSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    requried: true,
  },
  name: {
    type: String,
    required: true,
  },
  meal_type: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("restauranttype", restaurantTypeSchema);
