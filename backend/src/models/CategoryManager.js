const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  constructor() {
    super({ table: "category" });
  }
}
module.exports = CategoryManager;
