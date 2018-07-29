const {MongoClient, ObjectID} = require('mongodb');


const url = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(url,{ useNewUrlParser: true }, (err, client) => {
  if(err){
    console.log('Unable to connect to Mongo DB server');
    return;
  }
  console.log('Connected to Mongo DB Server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find().toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err) => {
  //   console.log('Unable to fetch');
  // });

  // db.collection('Todos').find({
  //     _id: new ObjectID('5b55001b9ac90801940d860d')
  //   }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err) => {
  //   console.log('Unable to fetch Todos', err);
  // });
  // db.collection('Todos').find().count().then((count) => {
  //   console.log('Total Count', count);
  //   //console.log(JSON.stringify(docs, undefined, 2));
  // },(err) => {
  //   console.log('Unable to fetch Todos', err);
  // });

  // db.collection('Users').find({name: "Saif Ahmed"}).toArray().then((docs)=>{
  //   console.log("Users");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err) => {
  //   console.log("Unable to fetch Users", err);
  // });
  //client.close();
});
