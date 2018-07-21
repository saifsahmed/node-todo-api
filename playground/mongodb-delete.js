const {MongoClient, ObjectID} = require('mongodb');


const url = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(url,{ useNewUrlParser: true }, (err, client) => {
  if(err){
    console.log('Unable to connect to Mongo DB server');
    return;
  }
  console.log('Connected to Mongo DB Server');
  const db = client.db('TodoApp');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Go to gym'}).then((result) => {
  //   console.log(result);
  // });

  //Delete one
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //Find one and delete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //     console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Saif Ahmed'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5b52577dff105ad9ec9546df')}).then((result) => {
    console.log(result);
  });

  //client.close();
});
