var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://saifahmed:secretpass1@ds259241.mlab.com:59241/todoapp'
};
mongoose.connect(process.env.PORT? db.mlab : db.localhost, {useNewUrlParser: true});

module.exports = {
  mongoose
};
