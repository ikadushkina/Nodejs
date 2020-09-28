const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Task_db", { useNewUrlParser: true })
    .then(()=>console.log("Success connection DB"))
    .catch((err)=>console.log("Error connection DB", err))