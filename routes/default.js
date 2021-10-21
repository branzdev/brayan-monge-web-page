var express = require('express');
var router = express.Router();

/* GET default page. */
router.get('/', function (req, res, next) {
	if (req.headers.host.slice(0, 3) === 'www') {
		res.redirect('https://' + req.headers.host + req.url, 301);
	} else {
		res.redirect('/');
	}
});

module.exports = router;
