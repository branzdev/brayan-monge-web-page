const express = require("express");
const router = express.Router();

/* GET default page and check if it has www and https. */
router.get("/", function (req, res, next) {
  if (process.env.NODE_ENV === "production") {
    if (req.headers.host.slice(0, 3) === "www") {
      res.redirect(301, "https://" + req.get("host").slice(4) + req.url);
    } else if (!req.secure && req.get("x-forwarded-proto") !== "https") {
      res.redirect(301, "https://" + req.get("host") + req.url);
    } else {
      next();
    }
  } else {
    next();
  }
});

module.exports = router;
