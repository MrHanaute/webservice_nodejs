// Controlers aki
// var Controller = require("./Controllers");
var playgroundController = require("./Controllers/playgroundController.js");
// get_playground
var validator = require('validator');


module.exports = function (app){

    app.get('/', function(req, res) {
        res.end(playground.get_playground());
    });

    app.get('/playground', function(req, res) {
        playgroundController.list()
        .then( (data)=>{
            res.send(data);
        }).catch( (err) => {
            res.send(err);
        })
       
    });

    app.get('/finaceiro', function(req, res) {

    });
    
    app.get('/finaceiro/:id', function(req, res) {
    
    });
    
    app.post('/finaceiro', function(req, res) {
    
    });
    
    app.put('/finaceiro', function(req, res) {
 
    });
    
    app.delete('/finaceiro/:id', function(req, res) {
    
    });

    return app;
}