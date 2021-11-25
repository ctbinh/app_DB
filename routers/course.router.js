const express = require('express');

const courseController = require('../controllers/course.controller');

const router = express.Router();

router.get('/', courseController.getAllCourse);
router.get('/vid', courseController.getAllVidCourse);

module.exports = router;