var express = require('express');
var router = express.Router();

/* GET default page. */
router.get('/', function (req, res, next) {
	if (req.headers.host.slice(0, 3) === 'www') {
		res.redirect(301, 'https://' + req.get('host').slice(3) + req.url);
	} else if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
		res.redirect(301, 'https://' + req.get('host') + req.url);
	} else {
		next();
	}
});

module.exports = router;
