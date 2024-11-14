const AuthService = require('../services/Auth.service');

exports.loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password || email.trim() === '') {
      return res.status(400).json({ message: 'Некорректные данные' });
    }

    const { user, accessToken, refreshToken } = await AuthService.authenticateUser(email, password);

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 3600 * 6 * 60 * 24,
    });

    res.status(200).json({ user, accessToken });
  } catch (error) {
    res.clearCookie('refreshToken').status(400).json({ message: error.message });
  }
};

exports.refreshController = async (req, res) => {
  try {
    const user = res.locals.user;
    const { accessToken, refreshToken } = await AuthService.refreshTokens(user);

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 3600 * 6 * 60 * 24,
    });

    res.status(200).json({ user, accessToken });
  } catch (error) {
    res.status(401).json({ user: {}, accessToken: '' });
  }
};

exports.logoutController = (req, res) => {
  res.clearCookie('refreshToken').json({ message: 'clearCookie' });
};