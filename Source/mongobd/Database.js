const mongoose = require("mongoose");

var use_schema = new mongoose.Schema({});

function searchTable(table_name){
	return mongoose.model(table_name,use_schema);
}

function insertTable(table_name,data_json){
	return null
}

function insertTable(table_name,schema){
	return null
}

function setValueObject(data_json, custom_schema){
	return new mongoose.Schema({});
}

module.exports = {
	searchTable : searchTable,
	setValueObject : setValueObject,
	insertTable : insertTable
}