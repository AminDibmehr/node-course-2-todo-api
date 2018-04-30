const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};


// 'mongodb://dibmehrm:se1234amin@ds163119.mlab.com:63119/todoapp'