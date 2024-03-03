const UserControllerConsole = require('./console/controller');
const UserViewConsole = require('./console/view');

(async () => {
  const controller = new UserControllerConsole();
  const view = new UserViewConsole(controller);
  await view.display_menu();
})();
