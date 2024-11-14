const { User } = require("../db/models");

class UserService {
  static async getAllUsers() {
    try {
      const users = await User.findAll({
        order: [["name", "ASC"]],
      });
      return users;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async createUser(data) {
    try {
      const newUser = await User.create(data);
      return newUser;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async deleteUser(id) {
    try {
      const deletedUser = await User.destroy({ where: { id } });
      return deletedUser;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async updateUser(data, id) {
    try {
      const updatedUser = await User.update(data, { where: { id } });
      return updatedUser;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async findUser(name) {
    try {
      const findedUser = await User.findOne({ where: { name } });
      return findedUser;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = UserService;
