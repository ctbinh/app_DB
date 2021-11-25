const Course = require('../models/course.model');

const getAllCourse = async (req, res, next) => {
  try {
    const [courses] = await Course.fetchAll();
    res.status(200).json(courses)
  } catch(err) {
    res.status(500).send({msg: 'Server error!'});
  }
}

const getAllVidCourse = async (req, res, next) => {
  try {
    const [courses] = await Course.getAllVidCourse();
    res.status(200).json(courses)
  } catch(err) {
    res.status(500).send({msg: 'Server error!'});
  }
}

module.exports = {
  getAllCourse, getAllVidCourse
}