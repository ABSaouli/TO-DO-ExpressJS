const mongoose = require('../config/dbmongo');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    firstname: String,
    lastname: String,
    Email: String,
    password: [{description: {type: String, required: true},
    done: {type: Boolean, default: false} }]
});

module.exports = mongoose.model('User', userSchema);

