const express = require("express");
const router = express.Router();
const Item = require("../controller/items");

router.get("/", Item.getItems);
router.delete("/:itemId", Item.removeItem);
// router.get("/:itemId", Item.getItem);
router.post("/", Item.addItem);

module.exports = router;
