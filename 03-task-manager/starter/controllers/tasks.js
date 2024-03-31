const Task = require('../models/Task');

const getAllTasks = (req, res) => {
    res.status(201).json({ success: true, msg: "All tasks" })
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task: task })
}

const getSingleTask = (req, res) => {
    res.status(201).json({ success: true, msg: "Single task" })
}

const updateTask = (req, res) => {
    res.status(201).json({ success: true, msg: "Task is updated", id: req.params.id })
}

const deleteTask = (req, res) => {
    res.status(201).json({ success: true, msg: "Task is deleted", id: req.params.id })
}

module.exports = {
    getAllTasks, 
    createTask, 
    getSingleTask,
    updateTask, 
    deleteTask,
}