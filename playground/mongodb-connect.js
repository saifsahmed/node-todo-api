//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


const url = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(url,{ useNewUrlParser: true }, (err, client) => {
  if(err){
    console.log('Unable to connect to Mongo DB server');
    return;
  }
  console.log('Connected to Mongo DB Server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Saif Ahmed',
  //   age: 26,
  //   location: 'Sunnyvale, CA'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert Users');
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });
  client.close();
});
