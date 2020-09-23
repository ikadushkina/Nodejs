const express = require("express");
const app = express();
const jsonParser = express.json();
const schema = require('./models/SchemaTodo')
const bodyParser = require('body-parser')


app.get("/tasks",jsonParser, schema.getTasks);
app.post("/add",jsonParser, schema.addTask);
app.post("/delete",jsonParser, schema.deleteTask);
app.post("/check", jsonParser, schema.checkTask);

app.listen(8000, function () {
    console.log("Сервер ожидает подключения...")
});

app.use(bodyParser.json())