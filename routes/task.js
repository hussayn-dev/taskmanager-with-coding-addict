const express = require('express')
const router = express.Router()
const Task = require('../models/task')
const task = require('../controller/task')
router.route('/').get(task.getAllTasks).post(task.createTask)
router.route('/:id').get(task.getTaskbyId).patch(task.updateTaskbyId).delete(task.deleteTaskbyId)

module.exports = router