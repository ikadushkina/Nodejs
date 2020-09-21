const app = require('express')();
const routes = require('./routes');
const bodyParser = require('body-parser');
const mongo = require('mongodb').MongoClient;

app.use(bodyParser.json());
app.use(routes);

app.listen(8000, () => {
    console.log('Hello, port 8000');
});

