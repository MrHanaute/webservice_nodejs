var db_connect= 'mongodb://127.0.0.1/nodews';

var mongoose = require('mongoose').connect(db_connect);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar no banco'));

db.once('open', function() {

	var userSchema = mongoose.Schema({

		fullname: String,
		email: String,
		password: String,
		created_at: Date
	});

	exports.User = mongoose.model('User', userSchema);
});