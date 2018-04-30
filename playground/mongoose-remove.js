const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result)
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findOneAndRemove({_id: '12132'}).then((todo) => {
    console.log(todo)
});

Todo.findByIdAndRemove('5ae6d4fb323368ac8151fb86').then((todo) => {
    console.log(todo);
});