// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb')
    }
    console.log('connected to mongodb server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5add56e9da523ed9abb9d125')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result)
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5ae11068f859934acae0f242')
    }, {
        $set: {
            name: 'amin'
        },
        $inc: {
            age: +2
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    });


    db.close();
});