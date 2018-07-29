var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://<user>:<password>@ds259241.mlab.com:59241/todoapp'
};
mongoose.connect(db.localhost || db.mlab, {useNewUrlParser: true});

module.exports = {
  mongoose
};
