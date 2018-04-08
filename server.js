// imports modules
var express = require('express'),
    app = module.exports = express(),
    bodyParser = require('body-parser');

 allowCors = function(req, res, next) {
    //definições do header
    res.header('Access-Control-Allow-Origin', '127.0.0.1:5000');
    //liberação dos methodos
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    //libera content-type
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //mais detalhes: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials
    res.header('Access-Control-Allow-Credentials', 'true');

	next();
}
//porta do express
app.listen(8000);
// injeta o a funçao allowCors
app.use(allowCors);
// middleware add bodyParser
app.use(bodyParser.json());
// bodyParser config.
app.use(bodyParser.urlencoded({
	extended: true
}));