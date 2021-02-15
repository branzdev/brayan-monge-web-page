var express = require('express');
var router = express.Router();
const path = require('path');

/* GET default page. */
router.get('/', function (req, res, next) {
	res.redirect('/');
});

module.exports = router;
