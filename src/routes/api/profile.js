const express = require("express");
const router = express.Router();
const Profile = require('../../models/Profile')

router.post('/new', async (req, res) => {
    console.log(req.body)
    try {
        const profile = new Profile(req.body);
        await profile.save()
        res.status(201).send(profile);
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find()
        res.status(201).send(profiles)
    } catch (e) {
        res.status.send(e)
    }
})

router.put('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const profile = await Profile.findOneAndUpdate({_id: id}, req.body, {new: true})
        await profile.save()
        res.status(201).send(profile)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router;