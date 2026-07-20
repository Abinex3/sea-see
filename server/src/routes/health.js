const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ status: "ok" });
});

module.exports = router; // <-- this line is what's likely missing or wrong