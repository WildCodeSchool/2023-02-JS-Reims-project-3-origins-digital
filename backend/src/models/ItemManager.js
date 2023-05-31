const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (name,mail,password) values (?,?,?)`,
      [user.name, user.mail, user.password]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} (name,mail,password) values (?,?,?)`,
      [user.name, user.mail, user.password]
    );
  }
}

module.exports = UserManager;
