const {ObjectID}  = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id  = "5b5d0af0d8489a517c3b09a511";
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => {
//   console.log(e);
// });

var userId = "5b5cac49c875e655982a189c";

User.findById(userId).then((user) => {
  if(!user){
    return console.log('User not found');
  }
  console.log(JSON.stringify( user, undefined, 2));
}).catch((e) => console.log(e));
