const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) =>{
    MongoClient.connect('mongodb+srv://ktkthuong:30062010phat@cluster0.gwa1tdk.mongodb.net/?retryWrites=true&w=majority')
        .then(client => {
            console.log('Connected!');
            callback(client);
        })
        .catch(err => {
            console.log(err);
        });
};
module.exports = mongoConnect;

