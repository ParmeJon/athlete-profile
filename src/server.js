const express = require('express');
const app = express();
const profiles = require('./routes/api/profile');
const mongoose = require("mongoose");
const db = require("../config/keys").mongoURI;
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/profiles', profiles);

mongoose
    .connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('hello world')
});

app.listen(port, () => { console.log(`Listening on port ${port}`)} );