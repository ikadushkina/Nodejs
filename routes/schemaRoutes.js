const router = require('express').Router();
const tempTodo = require('../controllers/schemaController');


router.get("/tasks", tempTodo.getTasks);
router.post("/add", tempTodo.addTask);
router.post("/delete", tempTodo.deleteTask);
router.post("/check", tempTodo.checkTask);


module.exports = router;
