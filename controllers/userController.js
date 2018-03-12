var db = require('../model/mongo.js');

exports.list = function(){

	return new Promise(function(resolve, reject) { 

		db.User.find({}, function(error, users) {

			if(error) {
				reject({error: 'Não foi possivel retornar o usuario'})
			} else {
				resolve(users);
			}

		});

	});
	
};

exports.user = function(id) {
	return new Promise(function(resolve, reject) { 

		db.User.findById(id, function(error, user) {

			if(error) {
				reject({error: 'Não foi possivel retornar o usuario'})
			}else {
				resolve(user);
			}

		});

	});
};


exports.save = function(fullname, email, password){
	return new Promise(function(resolve, reject) { 
		new db.User({
			'fullname': fullname,
			'email': email,
			'password': password,
			'created_at': new Date()
		}).save(function(error, user) {
	
			if(error) {
				reject({error: 'Não foi possivel retornar o usuario'})
			} else {
				resolve(user);
			}

		});

	});

};


exports.update = function(id, fullname, email, password) {
	return new Promise(function(resolve, reject) { 
		db.User.findById(id, function(error, user) {
			console.log(user, "pre if");
			if(fullname) {
				user.fullname = fullname;
			}
	
			if(email) {
				user.email = email;
			}
	
			if(password) {
				user.password = password;
			}
			console.log(user, "pos if");
			user.save(function(error, user) {
				if(error) {
					reject({error: 'Não foi possivel retornar o usuario'})
				} else {
					resolve(user);
				}
			});
		});

	});
};


exports.delete = function(id) {
	return new Promise(function(resolve, reject) { 

		db.User.findById(id, function(error, user) {

			if(error) {
	
				reject({error: 'Não foi possivel retornar o usuario'})
			} else {
	
				user.remove(function(error) {
	
					if(!error) {
						resolve({response: 'Usuário excluido com sucesso'});
					}
				});
			}
		});		
	});
};