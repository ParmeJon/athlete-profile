const express = require("express");
const router = express.Router();

router.post('/new', async (req, res) => {
    try {
        res.send('working post')
    } catch (e) {
        res.status.send(e)
    }
})

router.get('/', async (req, res) => {
    res.send('working get')
})

router.put('/:id', async (req, res) => {
    res.send('working put')
})

module.exports = router;