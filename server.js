const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser')
const db = require('./config/db')

const app = express();
const port = 8000

app.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err)
    require('./app/routes')(app, database)

    app.listen(port, () => {
        console.log('We are live on '+port)
    })
})

// If Using MongoDB version 3.0+
// MongoClient.connect(db.url, (err, database) => {
//     if (err) return console.log(err)
                        
//     // Make sure you add the database name and not the collection name
//     db = database.db("scootcrud_db")
//     require('./app/routes')(app, db);
    
//     app.listen(port, () => {
//       console.log('We are live on ' + port)
//     })              
// })

// require('./app/routes')(app, {})
// app.listen(port, () => {
//     console.log('We are on port '+port)
// })

