const db = require('../util/database');

module.exports = class User {
  static fetchAll() {
    return db.execute('SELECT * FROM USER');
  }
}