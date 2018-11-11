const mongoose = require("mongoose");

const connection = mongoose.connect('mongodb://localhost:27017/mongoose_todos', {
    useMongoClient: true
}).then(()=>{
    console.log('DataBase connected');
}).catch(()=>{
console.error('error of connection');
});

mongoose.Promise = global.Promise;


