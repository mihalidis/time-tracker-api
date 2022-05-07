const mongo = require('mongodb');
const mongoose = require('mongoose');

/* Database Connection */
mongoose.connect(process.env['Mongo_URI'], {useUnifiedTopology: true, useNewUrlParser: true});
const connection = mongoose.connection;
connection.on("error", console.log.bind(console, "connection error:"));

connection.once("open", () => {
    console.log("Mongodb database connection established successfully");
});