const bcrypt = require('bcrypt');
const ge
const { User } = require("../db/models");
const generateTokens = require('../utils/generateTokens');

class AuthService {
  static async authenticateUser(email, password) {
    try {
    // делаем валидацию полученных данных
    if (email.trim() === "" || password.trim() === "") {
      res.status(400).send("Заполни все поля!");
      return;
    }

    // ищем пользователя по почте
    const existingUser = await User.findOne({
      where: {
        email,
      },
    });

    // если такой почты нет в БД, то выдаем ошибку
    if (!existingUser) {
      res.status(400).send("Такого пользователя нет!");
    }

    const isCorrectedPassword = await bcrypt.compare(password, existingUser.password);

    const targetUser = existingUser.get();
    delete targetUser.password;

    if(isCorrectedPassword) {
        const{acessToken, refreshToken} = generateTokens({
            user: targetUser
        });

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 1000*60*60*24
        });

        res.status(200).json({user: targetUser, acessToken: acessToken})
    } else {
        res
            .clearCockie('refreshToken')
            .status(400)
            .json({message: 'Вы ввели некорректный email или пароль'});
    }
    } catch (error) {
        res
            .clearCockie('refreshToken')
            .status(500)
            .json({message: error.message});
  }

  

  static async aaa(email, password) {
}
  }
}

module.exports = AuthService;

