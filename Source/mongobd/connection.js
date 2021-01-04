const mongoose = require("mongoose");

function getMongoDBConnect(){
	mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology: true});
	return mongoose.connection;
}

function getAWSDynamoConnect(){
	return null;
}


module.exports = {
	getMongoDBConnect : getMongoDBConnect
}