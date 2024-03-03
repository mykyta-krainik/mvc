const userModel = require('./model');

module.exports = {
  getAll: (req, res) => {
    return res.render('users.hbs', {
      users: userModel.getAll(),
    });
  },
  create: (req, res) => {
    try {
      const { username, age } = req.body;

      if (!username || !age) {
        throw new Error('Username and age are required');
      }

      userModel.create({ user: { username, age } });

      return res.redirect('/users');
    } catch (error) {
      console.error(error);

      return res.render('users-error.hbs', {
        message: error.message
      })
    }
  },
  removeById: (req, res) => {
    try {
      const { id } = req.query;

      if (!id) {
        throw new Error('Id is required');
      }

      userModel.removeById({ id: parseInt(id) });

      return res.render('users.hbs', {
        users: userModel.getAll(),
      });
    } catch (error) {
      console.error(error);

      return res.render('users-error.hbs', {
        message: error.message
      })
    }
  }

}