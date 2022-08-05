const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clubSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    slogan:{
        type: String,
        required: true
    },
    club:{
        id:{type: mongoose.Schema.Types.ObjectId,
            ref:"Player"}
    },

    dateTime:{
        type: Date,
        default: Date.now
    }
})

const club = mongoose.model('club',clubSchema)

module.exports = club