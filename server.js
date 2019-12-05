const express = require('express');
const app = express();
const profiles = require('./src/routes/api/profile');
const mongoose = require("mongoose");
const path = require('path');
const db = require("./config/keys").mongoURI;
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'profiles-frontend/dist/profiles-frontend')))
app.use('/api/profiles', profiles);

mongoose
    .connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + "/profiles-frontend/dist/profiles-frontend/index.html"));
});

app.listen(port, () => { console.log(`Listening on port ${port}`)} );