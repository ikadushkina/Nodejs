const mongoose = require('mongoose');
const schema = mongoose.Schema;


const taskSchema = new schema({
    text: String,
    isCompleted: Boolean,
})

const Task = mongoose.model("Task", taskSchema);



module.exports = Task