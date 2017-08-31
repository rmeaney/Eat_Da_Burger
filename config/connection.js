//set up mySQL connection
var mysql = require('mysql');

var connection;

if(process.env.JAWSDB_URL){
	connection =mysql.createConnection(process.env.JAWSDB_URL);
}else{
connection = mysql.createConnection({
	//port:3306,
	host: 'ipobfcpvprjpmdo9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'rjkfy96r7yklmmpo',
	password: 'twk2dml3vu9riuu5',
	database: 'burgers_db'
});
}

// make connection
connection.connect(function(err){
	if(err){
		console.error('error connectiong: ' + err.stack);
		return;
	}console.log('connected as id: ' + connection.threadId);
});

//export Connections for our orm to use
module.exports = connection;