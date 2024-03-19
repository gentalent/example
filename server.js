const MongoClient = require("mongodb").MongoClient;
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();
const url = "mongodb://localhost:27017";
const port = 3000;
let db;

const hashPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hashedpassword = await bcrypt.hash(password, saltRounds);
        return hashedpassword;
    } catch (error) {
        console.log(error);
    }
};

const comparePassword = async (password, hashPassword) => {
    return bcrypt.compare(password, hashPassword);
}

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

app.post('/insertData', async (req, res) => {
    const { name, username, password } = req.body;
    if (password.length >= 8) {
        const hashedPassword = await hashPassword(password);
        const userData = { name, username, password: hashedPassword };
        db.collection('users').insertOne(userData)
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
    const { username, password } = req.body;
    const userDetails = await db.collection('users').findOne({ username: username });
    if (userDetails) {
        const isPasswordMatch = await comparePassword(password, userDetails.password);
        if (isPasswordMatch) {
            res.sendFile(path.join(__dirname, 'home.html'));
        }

    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
