const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const Item = require("../../models/Items");
const config = require("config");
const apikey = config.get("API_KEY");

router.post(
  `/${apikey}`,
  check("Name", "Name is required").notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const newItem = new Item({
        _id: req.body._id,
        Name: req.body.Name,
      });

      const item = await newItem.save();
      res.json(item);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    if (!items) {
      return res.status(404).json({
        msg: "items not found",
      });
    }
    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
