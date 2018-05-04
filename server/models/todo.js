const mongoose = require('mongoose');

let us = {
    email: 'dibmehrm@gmail.com',
    password: '1234',
    tokens: [{
        access: 'auth',
        token: 'kjaldjadljasdlajsdas'
    }]
};

let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {Todo};