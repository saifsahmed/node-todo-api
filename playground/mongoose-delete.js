const {ObjectID}  = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove({}) - can't pass in an empty argument
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove
Todo.findOneAndRemove({_id:'5b5e01f5e5382741e823abe9'}).then((doc) => {
  console.log(doc);
});


//Todo.findByIdAndRemove

// Todo.findByIdAndRemove('5b5e01f5e5382741e823abe9').then((todo) => {
//   console.log(JSON.stringify(todo, undefined, 2));
// });
