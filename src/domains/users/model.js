const users = [
  {
    id: 1,
    username: 'John',
    age: 30
  },
  {
    id: 2,
    username: 'Jane',
    age: 25
  }
];

let newId = 3;

module.exports = {
  create: ({ user }) => {
    const newUser = {
      id: newId,
      username: user.username,
      age: user.age
    };

    if (users.find(user => user.username === newUser.username)) {
      throw new Error('User already exists');
    }

    newId++;

    users.push(newUser);

    return newUser;
  },
  removeByUsername: ({ username }) => {
    const userIndex = users.findIndex(user => user.username === username);

    if (userIndex === -1) {
      throw new Error('User not found');
    }

    const [user] = users.splice(userIndex, 1);

    return user;
  },
  removeById: ({ id }) => {
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
      throw new Error('User not found');
    }

    const [user] = users.splice(userIndex, 1);

    return user;

  },
  getById: ({ id }) => {
    return users.find(user => user.id === id);
  },
  getAll: () => {
    return users;
  }
}