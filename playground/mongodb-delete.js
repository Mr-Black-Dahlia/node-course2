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

  // delete many
  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({Name: 'Tom'}).then((result) => {
  //   console.log(result);
  // })

// delete one
//   db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
//     console.log(result);
//   });

// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndDelete({
  _id: new ObjectID('584f4539b98de37b83b51171')
}).then((result) =>{
  console.log(result);
});


  // db.close();
});
