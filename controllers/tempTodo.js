const TempTodo = require('../models/TempTodo');
const statusCodes = require('../utils/statusCodes');

function addTodo(req, res) {
    const { text } = req.body;
    TempTodo.add(text);
    const list = TempTodo.getList();
    res.status(statusCodes.SUCCESS).json({ list });
    console.log('....', req.body);
}

function getList(req, res) {
    const list = TempTodo.getList();
    res.status(statusCodes.SUCCESS).json({ list });
}

function deleteTodo(req, res){
    const {id}  = req.body;
    console.log('....', id);
    TempTodo.delete(id);
    const list = TempTodo.getList();
    res.status(statusCodes.SUCCESS).json({ list });
}

function checkTodo(req, res){
    const {id}  = req.body;
    TempTodo.check(id);
    const list = TempTodo.getList();
    res.status(statusCodes.SUCCESS).json({ list });
    console.log('....', req.body);
}

function  checkAllTask(req,res){
    TempTodo.checkAll()
    const list = TempTodo.getList();
    res.status(statusCodes.SUCCESS).json({ list })
}

function  clearCompletedTask(req,res){
    TempTodo.clearCompleted()
    const list = TempTodo.getList();
    res.status(statusCodes.SUCCESS).json({ list })
}
function filterTaskAll(req, res) {
    TempTodo.filterAll()
    const list = TempTodo.getList();
    res.status(statusCodes.SUCCESS).json({ list })
}
function filterTaskTodo(req, res){
    TempTodo.filterTodo();
    const list = TempTodo.getList();
    res.status(statusCodes.SUCCESS).json({ list })
}

function filterTaskCompleted(req,res) {
    TempTodo.filterCompleted()
    const list = TempTodo.getList();
    res.status(statusCodes.SUCCESS).json({ list })
}

module.exports = {
    addTodo,
    getList,
    deleteTodo,
    checkTodo,
    checkAllTask,
    clearCompletedTask,
    filterTaskAll,
    filterTaskTodo,
    filterTaskCompleted
}