const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city_name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  locality: {
    type: String,
    required: true,
  },
  thumb: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    requried: true,
  },
  type: [
    {
      mealtype: {
        type: String,
        requried: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
  ],
  Cuisine: [
    {
      cuisine: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("restaurantcontents", restaurantSchema);
