const hello = require("express");
const mongoose = require("mongoose");
const app = hello();
const routes = require("./Routes/routes");
const authRoutes = require("./Routes/auth.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const { config } = require("dotenv");

config(); // Load environment variables from .env file

const PORT = 7000;
app.use(cors());
//Connecting Database
mongoose.connect("mongodb://127.0.0.1:27017/noor-blog", {
  useNewUrlParser: true,
});
// for checking database connection
mongoose.connection.once("open", () => {
  console.log("Database Connected successfully");
});
app.use(bodyParser.json());
//routing
app.use("/post", routes);
app.use("/auth", authRoutes);
//for connecting the port
app.listen(PORT, () => {
  console.log("Port is connected at " + PORT);
});
