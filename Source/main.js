// Read enviroment file

require('dotenv').config({path: '../.env'});

const mongoose = require("mongoose");
const client = mongoose.MongoClient;

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;



db.once("open",()=>{
const use_schema = new mongoose.Schema({});
const Modules = mongoose.model("customer",use_schema);
//console.log()
Modules.find().limit(10).exec((err,docs) => {console.log(docs)})

})
// Modules
// db.then((resolve)=>{



// console.log(db)
// })
//   .catch((err)=>{console.log(err)})
