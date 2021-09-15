require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const storiesRoutes = require("./routes/storiesRoutes");
const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Database Connected..."));

app.use("/api/stories", storiesRoutes);

const port = process.env.PORT || 5000;
app.listen(port);
