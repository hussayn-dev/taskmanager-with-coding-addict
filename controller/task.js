const Task = require('../models/task')
// const asyncWrapper = require('../middleware/async')
const CustomAPIError = require('../errors/custom-error')
exports.getAllTasks =async (req, res) => {
        const tasks = await Task.find({}) 
        
        res.status(200).json({tasks})
}
exports.createTask =async (req, res) => {
        const task = new Task(req.body)
        await task.save()
        res.status(201).json({task})
}


exports.getTaskbyId = async (req, res, next) => {
        const {id : taskID} = req.params
        const task = await Task.findById(taskID)
        if(!task) throw new CustomAPIError('Task not found', 404)
        res.status(200).json({task})
}

exports.updateTaskbyId =async (req, res) => {
        const {id : taskID} = req.params
        const task = await Task.findById(taskID)
        if(!task) throw new CustomAPIError('Task not found', 404)
     Object.keys(req.body).forEach(update =>  {
     task[update] = req.body[update]
         })
        await task.save()
        res.status(200).json({task})
   
}

exports.deleteTaskbyId = async (req, res) => {

        const {id : taskID} = req.params
        const task = await Task.findById(taskID)
        if(!task) throw new CustomAPIError('Task not found', 404)
        await task.remove()
        res.status(200).json({task})

}

