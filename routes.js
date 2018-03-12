var userController = require('./controllers/userController.js');
var validator = require('validator');

module.exports = function (app){

    app.get('/', function(req, res) {
        res.end('Servidor UP!');
    });
    
    app.get('/users', function(req, res) {
    
        userController.list()
        .then( (data)=> res.send(data) )
        .catch((err) => res.send(err) );

    });
    
    app.get('/users/:id', function(req, res) {
    
        var id = validator.trim(validator.escape(req.param('id')));
    
        userController.user(id)
            .then( (data)=> res.send(data) )
            .catch( (err) => res.send(err) );
    });
    
    app.post('/users', function(req, res) {
    
        var fullname = validator.trim(validator.escape(req.param('fullname')));
        var email = validator.trim(validator.escape(req.param('email')));
        var password = validator.trim(validator.escape(req.param('password')));
    
        userController.save(fullname, email, password)
        .then( (data)=> res.send(data) )
        .catch((err) => res.send(err) );

    });
    
    app.put('/users', function(req, res) {
    
        var id = validator.trim(validator.escape(req.param('id')));
        var fullname = validator.trim(validator.escape(req.param('fullname')));
        var email = validator.trim(validator.escape(req.param('email')));
        var password = validator.trim(validator.escape(req.param('password')));
    
        userController.update(id, fullname, email, password)
        .then( (data)=> res.send(data) )
        .catch((err) => res.send(err) );
    });
    
    app.delete('/users/:id', function(req, res) {
    
        var id = validator.trim(validator.escape(req.param('id')));
    
        userController.delete(id)
        .then( (data)=> res.send(data) )
        .catch((err) => res.send(err) );
    
    });

    return app;
}