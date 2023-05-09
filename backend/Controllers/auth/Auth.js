const AuthUser = require("../../Model/auth/Auth.js");

// for signup

const signup = async (res, req) => {
  const userDetails = await AuthUser(req.body); //grabbing data
  console.log(userDetails);
  try {
    const email = req.body.email;
    let password = req.body.password;
    const matchUser = await AuthUser.findOne({ email: email }); //variable declares on run time
    if (matchUser) {
      res.json("User Already Exists");
    } else {
      userDetails.save(); // save in database
      res.json("User created successfully");
    }
  } catch (error) {
    // res.status(500);
    console.log("Failed to created", error);
  }
};

const login = async (res, req) => {
  try {
    const userDetails = await AuthUser.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (userDetails) {
      res.json({ message: "Login Successfully", userDetails: userDetails });
    } else {
      res.json("User does not exist");
    }
  } catch (error) {
    // res.status(500);
    console.log("Failed to login", error);
  }
};

module.exports = { signup, login };
