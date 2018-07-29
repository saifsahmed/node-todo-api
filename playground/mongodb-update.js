const {MongoClient, ObjectID} = require('mongodb');


const url = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(url,{ useNewUrlParser: true }, (err, client) => {
  if(err){
    console.log('Unable to connect to Mongo DB server');
    return;
  }
  console.log('Connected to Mongo DB Server');
  const db = client.db('TodoApp');

  //updateOne
  // db.collection('Todos').findOneAndUpdate(
  //   {_id: new ObjectID('5b550397f566eb1444bc6b94')},
  //   {$set:
  //     {completed: true}
  //   },
  //   {
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(result);
  //   });

  db.collection('Users').findOneAndUpdate(
    {
      name: 'Mike'
    },{
      $set : {
        name: 'Saif'
      },
      $inc: {
        age : 1
      }
    },
    {
      returnOriginal : false
    }
  ).then((result) => {
    console.log(result);
  });

  //client.close();
});
