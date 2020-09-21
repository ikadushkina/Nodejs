const router = require('express').Router();
const tempTodo = require('../controllers/tempTodo');

router.get('/', tempTodo.getList);
router.post('/add', tempTodo.addTodo);
router.post('/delete', tempTodo.deleteTodo);
router.post('/check', tempTodo.checkTodo);
router.post('/check/all/true', tempTodo.checkAllTask);
router.post('/check/all/false', tempTodo.clearCompletedTask);
router.post('/filter/all', tempTodo.filterTaskAll);
router.post('/filter/todo', tempTodo.filterTaskTodo)
router.post('/filter/completed', tempTodo.filterTaskCompleted);

module.exports = router;
