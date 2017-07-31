const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const app = express();

var db

MongoClient.connect('mongodb://ilala1:Hello123@ds157078.mlab.com:57078/verne', (err, database) => {
  if (err) return console.log(err)
  db = database
  db.collection('verne').find().toArray(function(err, results) {
    console.log(results)
})
  app.listen(3000, function(){
    console.log('listening on 3000')
});
})

//middleware
app.use(express.static('dist'))
app.use(express.static('dist/images'))
app.use(bodyParser.urlencoded({extended:true}))

//CRUD handlers
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html')
})

// app.get('/', (req, res) => {
//   var cursor = db.collection('quotes').find()
//   console.log(cursor)
// })

app.post('/', (req, res) => {
    db.collection('customers').save(req.body, (err, result) => {
        if (err) {return console.log(err)} else {
            console.log('saved to db')
              res.redirect('/')
        }


    })
})
