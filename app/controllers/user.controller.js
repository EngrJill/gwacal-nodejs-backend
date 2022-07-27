const db = require("../models/index");
const User = db.user;
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
//const Op = db.Sequelize.Op;
exports.register = async (req, res) => {
    // Our register logic starts here
  try {
    // Get user input
    const { firstName, lastName, email, password, course } = req.body;

    // Validate user input
    if (!(email && password && firstName && lastName && course)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ where: { email: email } });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      firstName,
      lastName,
      course,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    user.token = token;

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
}
