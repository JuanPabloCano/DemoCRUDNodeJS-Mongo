const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: false,
    }
});

module.exports = mongoose.model('Users', UserSchema);