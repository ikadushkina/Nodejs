const router = require('express').Router();
const tempTodo = require('./tempTodo');

router.use('/temp-todo', tempTodo);

module.exports = router;