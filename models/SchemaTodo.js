const mongoose = require('mongoose');
const statusCodes = require("../utils/statusCodes");
const schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/Task_db", { useNewUrlParser: true });

const taskSchema = new schema({
    text: String,
    isCompleted: Boolean,
})

const Task = mongoose.model("Task", taskSchema);

async function getTasks(req,res){
    const list = await Task.find({});

    res.json({list});
}

async function addTask(req, res) {
    const { text } = req.body
    console.log( text );
    const task = new Task({
        text,
        isCompleted: false,
    })
    await task.save();
    const list = await Task.find({});
    res.status(statusCodes.SUCCESS).json({list})
}

async function deleteTask(req, res){
    const { id } = req.body

    await Task.deleteOne({_id: id});
    const list = await Task.find({});
    res.status(statusCodes.SUCCESS).json({list})
}

async function checkTask(req, res){
    const { id } = req.body;
    const task = await Task.findOne({ _id: id });

    task.isCompleted = !task.isCompleted;
    await task.save();

    const list = await Task.find({});
    res.json({list});
}

module.exports = {
    addTask,
    getTasks,
    deleteTask,
    checkTask
}