const prs = require("../mongobd/Progress.js");

function toDo(Command){
	console.log(Command.selector);
	console.log(JSON.parse(Command.condition))
	//console.log(Command.condition);
	if("COMMAND1" == Command.cmd){
		return  prs.getCustomer(100,Command.selector,JSON.parse(Command.condition))
	}
	return "not event";
}

module.exports = toDo