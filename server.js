const MongoClient = require("mongodb").MongoClient;
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const url = "mongodb://localhost:27017";
const port = 3000;
let db;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
})

MongoClient.connect(url)
    .then((client) => {
        console.log('Connected to MongoDB');
        db = client.db('project');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB: ', err);
    });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname)));

app.post('/insertData', (req, res) => {
    const { name, username, password } = req.body;
    if (password.length >= 8) {
        db.collection('users').insertOne(req.body)
            .then(() => {
                res.sendFile(path.join(__dirname, 'home.html'));
            })
            .catch((err) => {
                console.error('Error inserting data:', err);
                res.status(500).send('Error inserting data');
            })
    }
})

app.post('/checkData', async (req, res) => {
    const data = req.body;
    const { username, password } = data;
    const details = await db.collection('users').findOne({ username: username, password: password });
    if (details) {
        res.sendFile(path.join(__dirname, 'home.html'));
    }

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
