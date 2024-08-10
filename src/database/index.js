const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://articusarname:Iron-man@articcluster.vnr4w.mongodb.net/');
mongoose.Promise = global.Promise;

module.exports = mongoose;