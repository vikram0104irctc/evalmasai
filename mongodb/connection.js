require("dotenv").config();

const mongoose = require("mongoose");

URI = process.env.MONGO_URI;

const mongoconnection = mongoose.connect(URI);

module.exports = { mongoconnection };
