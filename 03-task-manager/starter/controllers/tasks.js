const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const {createCustomError} = require('../errors/custom-error')

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(201).json({ tasks });
})

const createTask = asyncWrapper (async (req, res) => {

    const task = await Task.create(req.body)
    res.status(201).json({ task: task })

})

const getSingleTask = asyncWrapper( async (req, res, next) => {

    const {id: TaskID} = req.params;
    const task = await Task.findOne({_id: TaskID});
    if (!task) {
        // we creating here a new custom error class and it extended js error (we create new instance)
        return next(createCustomError(`No taks whith id: ${TaskID}`, 404))
    }
    res.status(200).json({ task })

})


const deleteTask = asyncWrapper( async (req, res) => {

    const {id: TaskID} = req.params;
    const task = await Task.findOneAndDelete({_id: TaskID});
    if (!task) {
        return res.status(404).json({msg: `No taks whith id: ${TaskID}`});
    }

    res.status(200).json({ task });

    
})

const updateTask = asyncWrapper( async (req, res) => {

    const {id: TaskID} = req.params;
    const task = await Task.findOneAndUpdate({_id: TaskID}, req.body, {
        new: true,
        runValidators: true,
    })

    res.status(200).json({ task });

})


module.exports = {
    getAllTasks, 
    createTask, 
    getSingleTask,
    updateTask, 
    deleteTask,
}