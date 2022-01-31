const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const restaurant = require("./routes/restaurant.routes");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Use Routes
app.use("/v1", restaurant);

module.exports = app;
