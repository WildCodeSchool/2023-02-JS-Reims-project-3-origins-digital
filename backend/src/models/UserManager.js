const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findByNameWithHashedPassword(username) {
    return this.database.query(
      `select username, hashedPassword, is_admin from  ${this.table} where username = ?`,
      [username]
    );
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (username,mail,hashedPassword) values (?,?,?)`,
      [user.username, user.mail, user.hashedPassword]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set username = ?, mail = ?, hashedpassword = ? where id = ?`,
      [user.username, user.mail, user.password]
    );
  }
}

module.exports = UserManager;
