var mongoose = require("mongoose");
var GenerateSchema = require("generate-schema")
var typeMappings  =
{"string":String, 
 "number":Number,
 "boolean":Boolean,
 "objectId":mongoose.Schema.ObjectId,
  //....etc
}

// use libary
function createSchema(json_data){

}

// Manual
function createSchema2(json_data, template){
	let mongoSchema = {};
	console.log(json_data)
	console.log("---------------START------------------")
	for(item in json_data){
		if(typeof json_data[item] != 'object' || Array.isArray(json_data[item])){
			let type = typeMappings[typeof json_data[item]];
			if(Array.isArray(json_data[item])){
				type = Array;
			}
			console.log("TYPE: "+type)
			if(template != undefined){
				if(template[item] != undefined){
					console.log("temp 1 is "+template[item]+" : "+type);
					mongoSchema[template[item]] = type;
				}else{
					console.log("temp 2 is "+ item +":"+type);
					mongoSchema[item] = type;
				}
			}else{
				console.log("not temp is "+type)
				mongoSchema[item] = type;
			}	
		}else{
			console.log("call item: "+item)
			let child_temp = null
			if(template != null){
				child_temp = template[item]
			}
			mongoSchema[item] = createSchema2(json_data[item],child_temp);
		}
	}
	return mongoSchema;
}

module.exports = {
	createSchema : createSchema,
	createSchema2 : createSchema2
}

