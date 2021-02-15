var express = require('express');
var router = express.Router();
const path = require('path');

/* GET default page. */
router.get('/', function (req, res, next) {
	if (
		req.headers['x-forwarded-proto'] != 'https' &&
		process.env.NODE_ENV === 'production'
	)
		res.redirect(301, 'https://bmongemendez.com' + req.url);
	else next(); /* Continue to other routes if we're not redirecting */
});

module.exports = router;
