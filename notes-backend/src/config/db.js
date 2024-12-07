const mongoose = require('mongoose');

const connectionURI = "mongodb://localhost:27017/Projects";

mongoose.connect(connectionURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

module.exports = mongoose;