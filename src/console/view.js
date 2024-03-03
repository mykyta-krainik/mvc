const readline = require('readline').promises;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class UserViewConsole {
  constructor(controller) {
    this.controller = controller;
  }

  async display_menu() {
    while (true) {
      console.log("Options:\n1. Add user\n2. List all users\n3. Remove user by ID\n4. Exit");
      const option = await rl.question("Choose an option: ");

      switch (parseInt(option, 10)) {
        case 1:
          const userDetails = await this.prompt_user_details();

          if (userDetails) {
            const { name, age, occupation } = userDetails;

            console.log(await this.controller.addUser(name, age, occupation));
          }

          break;

        case 2:
          const users = this.controller.listUsers();

          console.log(users.length ? users : "No users found.");

          break;

        case 3:
          const id = await rl.question("Enter user ID: ");

          console.log(this.controller.removeUserById(parseInt(id, 10)));

          break;

        case 4:
          console.log("Exiting...");

          rl.close();

          return;

        default:
          console.log("Invalid option, please try again.");
      }
    }
  }

  async prompt_user_details() {
    const name = await rl.question("Enter name: ");
    const age = parseInt(await rl.question("Enter age: "), 10);
    const occupation = await rl.question("Enter occupation: ");

    return { name, age, occupation };
  }
}

module.exports = UserViewConsole;
