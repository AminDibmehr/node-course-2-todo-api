// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb')
    }
    console.log('connected to mongodb server');

    // //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat Launch'}).then((result) => {
    //     console.log(result)
    // });
    // //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat Launch'}).then((result) => {
    //     console.log(result)
    // });
    // //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result)
    // });

    // db.collection('Users').deleteMany({name: 'amin'}).then((result) => {
    //     console.log(result)
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5ae1105bf859934acae0f23f')}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2))
    });


    db.close();
});