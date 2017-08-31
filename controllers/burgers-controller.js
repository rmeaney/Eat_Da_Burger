var express = require('express');

var router = express.Router();

//import the model (burger,js) to use its database functions
var burger = require('../models/burger.js');
//create all our routes

router.get('/', function(request, response){
	burger.all(function(data){
		var hbsObject = {
			cats: data
		};
		console.log(hbsObject);
		res.render(index, hbsObject);
	});
});