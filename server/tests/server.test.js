const expect = require('expect');
const request = require('supertest');

const {ObjectID}  = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
  _id: new ObjectID(),
  text: 'First test todo'
}, {
  _id: new ObjectID(),
  text: 'Second test todo',
  completed: true,
  completedAt: 3333
}];

beforeEach((done) =>{
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);

  }).then(() => done());
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
      var text = 'Test todo text';

      request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res) => {
          expect(res.body.text).toBe(text);
        })
        .end((err, res) => {
          if(err){
            return done(err);
          }
          Todo.find({text}).then((todos) => {
            expect(todos.length).toBe(1);
            expect(todos[0].text).toBe(text);
            done();
          }).catch((e) => {
            done(e);
          });
        });
  });

  it('should not create todo with invalid body data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if(err){
          return done(err);
        }
        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => {
          done(e);
        });
      });
  });

});

describe('GET /todos', () => {
  it("should get all todos", (done) => {
      request(app)
        .get('/todos')
        .expect(200)
        .expect((res) => {
          //console.log(res);
          expect(res.body.todos.length).toBe(2);
        })
        .end(done);
  });
});

describe('GET /todos/:id', () => {
  it("should return todo doc", (done) => {
      request(app)
        .get(`/todos/${todos[0]._id.toHexString()}`)
        .expect(200)
        .expect((res) => {
          expect(res.body.todo.text).toBe(todos[0].text);
        })
        .end(done);
  });

  it("should return 404 if todo not found",(done) => {
    request(app)
      .get(`/todos/${(new ObjectID()).toHexString()}`)
      .expect(404)
      .end(done);
  });

  it("should return 404 for non Object Ids", (done) => {
    request(app)
      .get('/todos/123')
      .expect(404)
      .end(done);
  });
});

describe('DELETE /todos/:id', () => {
  it("should remove a todo", (done) => {
    var hexId = todos[1]._id.toHexString();
    request(app)
      .delete(`/todos/${hexId}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo._id).toBe(hexId);
      })
      .end((err, res) => {
        if(err){
          return done(err);
        }
        Todo.findById(hexId).then((todo) => {
          expect(todo).toBeFalsy();
          done();
        }).catch((e) => {
          done(e);
        });
      })
  });
  it("should return a 404 id todo not found", (done) => {
    var hexId = new ObjectID().toHexString();
    request(app)
      .delete(`/todos/${hexId}`)
      .expect(404)
      .end(done);
  });
  it("should return 404 if Object ID is invalid", (done) => {
    request(app)
      .delete('/todos/123')
      .expect(404)
      .end(done);
  });
});

describe('PATCH /todos/:id', () => {
  it("should update the todo", (done) => {
    //grab id of first item
    var hexId = todos[0]._id.toHexString();
    var text = 'Test update text';
    //update the text and set completed = true
    request(app)
      .patch(`/todos/${hexId}`)
      .send({
        completed: true,
        text
      })
      .expect(200)
      .expect((res) => {
        console.log(res.body);
        expect(res.body.todo.text).toBe(text);
        expect(res.body.todo.completed).toBe(true);
        expect(typeof res.body.todo.completedAt).toBe('number');
      })
      .end(done);
    //assert 200
    //assert response body has text changed, complete ture and completedAt is a number
  });

  it("should clear completedAt when todo is not completed",(done) => {
    var hexId = todos[1]._id.toHexString();
    var text = 'This is updated text';
    //grab id of second item
    //update text, set completed false
    //assert 200
    //text is changed, completed is false and completedAt is null.
    request(app)
      .patch(`/todos/${hexId}`)
      .send({
        completed: false,
        text
      })
      .expect(200)
      .expect((res) => {
        //console.log(res.body);
        expect(res.body.todo.text).toBe(text);
        expect(res.body.todo.completed).toBe(false);
        expect(res.body.todo.completedAt).toBeFalsy();
      })
      .end(done);
  });
})
