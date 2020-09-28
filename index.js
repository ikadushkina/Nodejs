const express = require("express");
const app = express();
const routes = require('./routes');
const models = require('./models');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

app.use(cookieParser('secret key'))
app.use(bodyParser.json())


app.use(routes);

app.listen(8000, function () {
    console.log("Сервер ожидает подключения...")
});
