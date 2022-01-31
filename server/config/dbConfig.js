const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/restaurantapi";

const connectDB = () => {
  mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((data) => {
      console.log(`MongoDB connected with server => ${data.connection.host}`);
    })
    .catch((err) => console.log(err));
};

module.exports = connectDB;
