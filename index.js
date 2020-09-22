const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectID;

const app = express();
const jsonParser = express.json();



// const app = require('express')();
// const routes = require('./routes');
// const bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient
// const jsonParser = app.json();
const url = 'mongodb://localhost:27017/';

const mongo = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });

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
// MongoClient.connect(url, (err, client) => {
//     const db = client.db('Users_DB')
//     const users = db.collection('Users')
//     users.find().toArray((err, results) => {
//         console.log(results);
//         client.close()
//     });
//     // users.insertOne({login: 'Jack', password: '123456', list: [{id: 0, text: 'Test task', isCompleted: true}]})
//     // users.updateOne({login:'admin'}, {$set: {list: [
//     //             {
//     //                 id: 0,
//     //                 text: 'Create database',
//     //                 isCompleted: true,
//     //             },{
//     //     id: 1,
//     //                 text: 'Connect MongoDB  with Nodejs',
//     //                 isCompleted: false,
//     //             }
//     //         ] }}, { returnOriginal: false },);
//
//     client.close()
// })

// app.use(bodyParser.json());
// app.use(routes);

// app.listen(8080, () => {
//     console.log('Hello, port 8000');
// });

