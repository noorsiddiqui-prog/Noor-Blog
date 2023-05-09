const mongoose = require("mongoose");
const { config } = require("dotenv");

config(); // Load environment variables from .env file
const mongoURI = process.env.DATABASE;

const connectToMongo = () => {
  mongoose
    .connect(
      mongoURI
      //  { useNewUrlParser: true }
    )
    .then(() => {
      console.log(`Connected to MongoDB at ${mongoURI}`);
    })
    .catch((error) => {
      console.error(`Error connecting to MongoDB at ${mongoURI}:`, error);
    });
};

module.exports = connectToMongo;
