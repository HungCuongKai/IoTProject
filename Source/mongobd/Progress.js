var connectDB = require("./connection.js");
var database   = require("./Database.js");
var convert    = require("./Json2Schema.js");

connectDB.getMongoDBConnect();

function getTransactions(){
	return database.searchTable("transactions").find().exec();
}

function getCustomer(number,selector,condition){
	return database.searchTable("customer").find(condition,selector).limit(number).exec();
}

function insetCustomer(json_data,template){
	var schema = getSchema(json_data,template);
	database.insertTable("customer",schema).create(json_data,(err) =>{ if(err) console.log(err)
	else console.log("save")});
}

function getSchema(data_json,template){
	return convert.createSchema2(data_json,template);
}

module.exports = {
	getTransactions : getTransactions,
	getCustomer : getCustomer,
	getSchema : getSchema,
	insetCustomer : insetCustomer
}