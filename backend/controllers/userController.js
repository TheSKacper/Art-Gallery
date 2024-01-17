const {User} = require('../models/userModel.js')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  try {
    const { login, password } = {
      login: req.body.login,
      password: req.body.password,
    };
    const user = await User.findOne({ login });
    if (user) {
      res.status(401).json("Email exist !");
      return;
    }

    const cryptoPassword = await bcrypt.hash(password, 10);

    const newUser = {
      id: "",
      login: login.toLowerCase(),
      password: cryptoPassword,
    };

    const dbUser = await User.create(newUser);
    res.send(generateTokenResponse(dbUser));
  } catch (error) {
    res.status(401).json("Something wrong man");
  }
};

const userLogin = async (req, res) => {
  try {
    const { login, password } = req.body;
    const user = await User.findOne({ login });

    if (!user) {
      return res.status(401).json("Invalid login or password");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      const tokenPayload = {
        login: user.login,
        role: user.role,
        id: user._id,
      };
      const token = jwt.sign(tokenPayload, "SomeRandomText", {
        expiresIn: "30d",
      });
      return res.status(200).json({ token, role: user.role, id: user._id });
    } else {
      return res.status(401).json("Invalid login or password");
    }
  } catch (error) {
    console.error("Login error:", error.message);
    return res.status(500).json("Internal server error");
  }
};

const getAllUser = async (req, res) => {
  try {
    const find = await User.find();
    res.status(200).json(find);
  } catch (error) {
    res.status(401).json("Something wrong lol ");
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted")
  } catch (error) {
    console.log(error);
  }
};

const generateTokenResponse = (user) => {
  const token = jwt.sign(
    {
      login: user.login,
    },
    "SomeRandomText",
    {
      expiresIn: "30d",
    }
  );

  user.token = token;
  return user;
};

module.exports = {
  createUser,
  userLogin,
  getAllUser,
  deleteUser
};