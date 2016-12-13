// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to server');
  }
  console.log('connected to to database');

  // db.collection('Todos').find({
  //   _id: new ObjectID('584f310cb98de37b83b50c6d')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.collection('Users').find({Name: 'Matthew'}).count().then((count) => {
    console.log(`This many People have the name Matthew: ${count}`);
  }, (err) => {
    console.log('unable to fetch it', err);
  });
  // db.close();
});
