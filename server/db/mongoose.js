const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};


// 'mongodb://dibmehrm:se1234amin@ds163119.mlab.com:63119/todoapp'