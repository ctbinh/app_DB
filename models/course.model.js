const db = require('../util/database');

module.exports = class Course {
  static fetchAll() {
    return db.execute('SELECT * FROM COURSE');
  }
  static getAllVidCourse() {
    return db.execute('CALL VIEW_VID_COURSES()')
  }
}