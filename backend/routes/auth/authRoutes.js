const express = require("express");
const { signup, login } = require("../../Controllers/auth/Auth.js");

const authRouter = express.Router();

// authentication routing
authRouter.post("/signup", signup);
authRouter.post("/login", login);

module.exports = authRouter;
