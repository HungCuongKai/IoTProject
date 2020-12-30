//Read enviroment file
require('dotenv').config({path: './.env'});
require("./Source/mongobd/connection.js");
var database   = require("./Source/mongobd/Database.js")
var count =0;

//console.log(database.searchTable("customer").findOne());
database.searchTable("customer").findOne().exec((err,docs) => {
	var title = []
	for(x in docs.toJSON()){
		title.push(x);
	}
	console.log(title)
});