const router = require('express').Router();
const tempTodo = require('./schemaRoutes');
const user = require('./userRoute')
const verif = require('./../controllers/usersController')





router.use(user)

router.use(verif.verification)

router.use(tempTodo);

module.exports = router;