//set up mySQL connection
var mysql = require('mysql');

var connection = mysql.createConnection({
	port:3306,
	host: 'localhost',
	user: 'root',
	password: 'UltraMagnus86',
	database: 'burgers_db'
});

// make connection
connection.connect(function(err){
	if(err){
		console.error('error connectiong: ' + err.stack);
		return;
	}console.log('connected as id ' + connection.threadId);
});

//export Connections for our orm to use
module.exports = connection;