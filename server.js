const express = require('express');
const app = express();
//Express Download File
app.get('/download', function (req, res) {
	res.download('./public/files/Brayan Monge Méndez Resume.pdf');
});
app.listen(8080);
