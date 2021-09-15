const express = require("express");
const router = express.Router();

const restaurants = [
  { id: 1, name: "Restaurant 1", address: "XYZ" },
  { id: 2, name: "Restaurant 2", address: "ABC" },
  { id: 3, name: "Restaurant 3", address: "UVX" },
];

router.get("/", (req, res) => {
  res.json(restaurants);
});

router.get("/:id", (req, res) => {
  res.json(restaurants.filter((r) => r.id == req.params.id));
});

module.exports = router;
