const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const app = express();
const jsonParser = express.json();

const url = 'mongodb://localhost:27017/';

const mongo = new MongoClient(url, { useNewUrlParser: true });

mongo.connect((err, client) => {

    app.locals.collection = client.db("Users_DB").collection("Task");
    app.listen(8000, function () {
        console.log("Сервер ожидает подключения...");
    });

})
app.get("/api/users", function (req, res){
    const collection = req.app.locals.collection;
    collection.find({}).toArray(function(err, tasks){
        if(err) return console.log(err);
        let list = tasks;
        res.json({ list });
    });
});

app.post("/api/add",jsonParser, function (req, res) {
    const {text} = req.body;
    console.log('....', text);
    if(!req.body) return res.sendStatus(400);
    let task = { text, isCompleted: false }
    const collection = req.app.locals.collection;
    collection.insertOne(task);
});

app.post('/api/delete', function(req, res){
    const {id} = req.body;
    console.log('....', id);
    const collection = req.app.locals.collection;
    collection.deleteOne({ _id: id});
});

