const mongoose = require("mongoose");
require('dotenv').config({path: '../../.env'});
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

module.exports = mongoose.connection