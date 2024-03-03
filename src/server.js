const express = require('express');
const path = require('path');
const userController = require('./domains/users/controller');

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.get('/users', userController.getAll);
app.post('/users', userController.create);
app.delete('/users', userController.removeById);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
