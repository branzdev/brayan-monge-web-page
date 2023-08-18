const express = require("express");
const router = express.Router();

//Express Download File
router.get("/", (req, res, next) => {
  res.download("../files/Brayan Monge Méndez Resume 2021.pdf");
});

module.exports = router;
