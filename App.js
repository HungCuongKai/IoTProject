//Read enviroment file
require('dotenv').config({path: './.env'});
const prs = require("./Source/mongobd/Progress.js");
const mongoose = require("mongoose");
const convert = require("./Source/mongobd/Json2Schema.js");
const resolvers = require("./Source/controller/schemma/Resolve.js");
const typeDefs = require("./Source/controller/schemma/Schema.js");
const control = require("./Source/controller/ControlBiz.js");
// Get Data
// prs.getCustomer(100,"username accounts",{username: 'Cuong4'});
// Inset Data 
// var json = {
// 				name:"Test",
// 				data: {
// 					name: 'Tran Hung Cuong',
// 			    	username: 'Cuong9'
// 				}
// 			  }

//  var template = {address : "diachi"}
//  prs.insetCustomer(json, template);

//-----------------------------------------------------------------------------------
const { ApolloServer, gql } = require('apollo-server');

const server = new ApolloServer({ typeDefs, resolvers});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});