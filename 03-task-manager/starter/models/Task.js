const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
    success: Boolean,
})

module.exports = mongoose.model('Task', TaskSchema);