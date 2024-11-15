const bcrypt = require("bcrypt");
const { User } = require("../db/models");
const generateTokens = require("../utils/generateTokens");

class AuthService {
  static async authenticateUser(email, password) {
   
    const user = await User.findOne({ where: { email } });
    
    if (!user) {
      throw new Error("Пользователь не найден");
    }
    
    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword) {
      throw new Error("Неверный пароль");
    }

    const targetUser = user.get();
    delete targetUser.password;

    const { accessToken, refreshToken } = generateTokens({ user: targetUser });

    return { user: targetUser, accessToken, refreshToken };
  }

  static async refreshTokens(user) {
    const { accessToken, refreshToken } = generateTokens({ user });
    return { accessToken, refreshToken };
  }
}

module.exports = AuthService;
