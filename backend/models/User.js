const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    kind: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('user', UserSchema);