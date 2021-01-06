const Control = require("../ControlBiz.js");

module.exports = {
	Query: {
		    session: () => {return {id: "123", name:"cuong tran"}},
		    data: async (parent, command) => {
		    	// JSON.parse in client to use this data
		      	return JSON.stringify(await Control(command));
		    },
		    data_row : async(parent,command) =>{
		    	return await Control(command);
		    }
		  }
}