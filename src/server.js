const express = require('express');
const app = express();
const profiles = require('./routes/api/profile');
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/profiles', profiles);

app.get('/', (req, res) => {
    res.send('hello world')
});

app.listen(port, () => { console.log(`Listening on port ${port}`)} );