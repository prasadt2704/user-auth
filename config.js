const mongoose = require("mongoose");

function connectToMongoDB() {
  return mongoose.connect("mongodb://127.0.0.1:27017/userAuth");
}

module.exports = { connectToMongoDB };
