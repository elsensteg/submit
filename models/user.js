// package dependency
const mongoose = require('mongoose');
const { Schema } = mongoose;

let userSchema = new Schema({ 
    firstName: {
        type: String,
        required: true
    }, 
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    }    
});
const User = mongoose.model('User', userSchema);
module.exports = User;