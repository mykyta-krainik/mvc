const userModel = require('../domains/users/model');

class UserControllerConsole {
  async addUser(username, age) {
    try {
      const user = {
        username,
        age
      };
      const newUser = userModel.create({ user });

      return `User ${newUser.username} added successfully.`;
    } catch (e) {
      return `Error: ${e.message}`;
    }
  }

  listUsers() {
    return userModel.getAll();
  }

  removeUserById(id) {
    try {
      const user = userModel.removeById({ id });
      return `User ${user.username} removed successfully.`;
    } catch (e) {
      return `Error: ${e.message}`;
    }
  }
}

module.exports = UserControllerConsole;
