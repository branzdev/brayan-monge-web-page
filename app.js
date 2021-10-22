var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv').config({ path: __dirname + '/.env' });

var sendMailRouter = require('./routes/sendMail');
let defaultRouter = require('./routes/default');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('*', defaultRouter);

app.use((req, res, next) => {
	if (/(.ico|.js|.css|.jpg|.png|.map|.svg)$/i.test(req.path)) {
		next();
	} else {
		res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
		res.header('Expires', '-1');
		res.header('Pragma', 'no-cache');
		res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
	}
});
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use('/api/sendMail', sendMailRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	// res.render('error');
});

module.exports = app;
