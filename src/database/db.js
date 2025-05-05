const mongoose = require("mongoose");

const connectDb = () => {
  return mongoose.connect(
    "mongodb+srv://suresh:1234@test.smv6q.mongodb.net/?retryWrites=true&w=majority&appName=devTinder"
  );
};

module.exports = connectDb;
