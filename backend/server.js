const express = require("express");
const restaurantRoutes = require("./routes/restaurantRoutes");
const app = express();

app.use("/api/restaurant", restaurantRoutes);

const port = process.env.PORT || 5000;
app.listen(port);
