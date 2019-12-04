const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    association: {
        type: String
    },
    team: {
        type: String
    },
    gender: {
        type: String,
        required: true
    }, 
    sports: [{
        name: String
    }],
    about: {
        type: String
    }, 
    interests: {
        type: String
    },
    charities: {
        type: String
    },
    socialMedia: [{
        name: String,
        link: String
    }], 
    pets: {
        type: String
    },
    drinksAlcohol: {
        type: Boolean
    }, 
    married: {
        type: Boolean
    }
}, {
    timestamps: true
})

module.exports = Profile = mongoose.model('Profile', ProfileSchema);