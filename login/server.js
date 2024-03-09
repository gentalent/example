const MongoClient = require("mongodb").MongoClient;
const express = require('express');

const details = require('./login')
// const details = require('./login');

const app = express();
const url = "mongodb://localhost:27017";
const port = 3000;

// MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     const dbo = db.db('start');
//     const obj = { username: 'Dheeraj', password: '1234' };
//     dbo.collection('emp').insertOne(obj, (err) => {
//         if (err) throw err;
//         console.log("1 obj added");
//     })
// })

const client = new MongoClient(url);

const database = client.db('start');
const emp = database.collection('emp');
emp.insertOne(details, (req, res) => {
    if (err) throw err;
    console.log('1 user inserted');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

