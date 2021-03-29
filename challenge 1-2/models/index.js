const mongoose = require('mongoose');

const uri = "mongodb+srv://pudji:blog@blog.vdhil.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}) // Connect to mongodb database

const blog = require('./blog.js'); // Import campaign model

module.exports = {blog}; // Export blog model