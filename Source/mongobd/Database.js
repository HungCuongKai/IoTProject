const mongoose = require("mongoose");
const json2Schema = require("./Json2Schema.js");

var use_schema = new mongoose.Schema({});

function searchTable(table_name){
	return mongoose.model(table_name,use_schema);
}

function insertTable(table_name,schema_data){
	return new mongoose.model(table_name,schema_data)
}


module.exports = {
	searchTable : searchTable,
	insertTable : insertTable
}