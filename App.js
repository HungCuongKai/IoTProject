//Read enviroment file
require('dotenv').config({path: './.env'});
const prs = require("./Source/mongobd/Progress.js");
const mongoose = require("mongoose");
const convert = require("./Source/mongobd/Json2Schema.js");

// Get Data
prs.getCustomer(100,"username accounts",{username: 'Cuong4'});
// Inset Data 


// var json = {
// 			    'username': 'Cuong5',
// 			    'name': 'Tran Hung Cuong',
// 			    'address': '9286 Bethany Glens\nVasqueztown, CO 22939',
// 			    'birthdate': '1977-03-02T02:20:31.000Z',
// 			    'email': 'arroyocolton@gmail.com',
// 			    active: true,
// 			    accounts: [ 371138, 324287, 276528, 332179, 422649, 387979 ],
// 			    tier_and_details: {
// 			      '0df078f33aa74a2e9696e0520c1a828a': {name : "a"},
// 			      '699456451cc24f028d2aa99d7534c219': [1,2,3]
// 			    }
// 			  }

//  var template = {address : "diachi"}
 // prs.insetCustomer(json, template);

//-----------------------------------------------------------------------------------
// const { ApolloServer, gql } = require('apollo-server');
// const GraphQLJSON = require('graphql-type-json');

// const schemaString = gql`
//   scalar JSON

//   type Foo {
//     aField: JSON
//   }

//   type Query {
//     foo: Foo
//   }
// `;

// const resolvers = {
//   Query: {
//     books: () => convert.createSchema2json(json,null),
//   },
// };

// const server = new ApolloServer({ typeDefs: schemaString, resolvers });

// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`)
// });