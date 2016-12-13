// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to server');
  }
  console.log('connected to to database');


// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('584f4353b98de37b83b5106b')
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('584d06ffddf19814201d5ba8')
}, {
  $set: {
    Name: 'Matthew'
  },
  $inc: {
      Age: 1
    }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});

  // db.close();
});
