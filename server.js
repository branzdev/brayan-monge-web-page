const express = require('express');
const app = express();
//Express Download File
app.get('/download-resume', (req, res) => {
	res.download('./src/files/Brayan Monge Méndez Resume.pdf');
});
app.listen(8080);
