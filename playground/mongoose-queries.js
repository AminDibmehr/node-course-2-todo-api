const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '5ae5594361985906c0b2033511';
//
// if(!ObjectID.isValid(id)){
//     console.log('Id is not valid')
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo)
// });
//
// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found')
//     }
//     console.log('Todo by id', todo)
// }).catch((e) => console.log(e));

let id = '5ae140f7cd17c31d74580e3e';

User.findById(id).then((user) => {
    if (!user) {
        return console.log('user not found')
    }
    console.log('user', user)
}).catch((e) => console.log(e));