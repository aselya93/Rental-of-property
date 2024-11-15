const UserService = require("../services/User.service");
const bcrypt = require('bcrypt');
const generateTokens = require("../utils/generateTokens");
const jwtConfig = require("../config/jwtConfig");

exports.createUserController = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await UserService.findUser(email);
    if (!user) {
      user = await UserService.createUser({
        name,
        email,
        password: await bcrypt.hash(password, 10),
      });
      delete user.password;
      res.locals.user = user;
      const {accessToken, refreshToken} = generateTokens({user})

      return res.status(201).cookie(jwtConfig.refresh.type, refreshToken, {
        httpOnly: true,
        maxAge: jwtConfig.refresh.expiresIn,
      }).json({ message: "success", user, accessToken });
    }
    res.status(400).send('Такой пользователь уже существует!')
  } catch (error) {
    res.status(500).json({ message: error.message, user: {} });
  }
};

exports.deleteUserController = async (req, res) => {
  const { id } = req.params;
  try {
    const countDeleteUserCards = await UserService.deleteUser(id);
    if (countDeleteUserCards > 0) {
      res.status(200).json({ message: "success" });
    } else {
      res.status(400).json({ message: "Not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllUserController = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).json({ message: "success", users });
  } catch (error) {
    res.status(500).json({ message: error.message, user: [] });
  }
};

exports.updateUserController = async (req, res) => {
  const { name, email, password } = req.body;
  const { id } = req.params;
  try {
    const countUpdate = await UserService.updateUser(req.body, id);
    res.status(200).json({ message: "success", countUpdate });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
