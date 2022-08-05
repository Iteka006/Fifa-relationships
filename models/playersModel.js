const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PlayerSchema = new Schema({
firstName: {
    type: String,
    required: true
},
lastName: {
    type: String,
    required: true
},
email: {
    type: String,
    required: true
},
password: {
    type: String,
    required: true
},
phone: {
    type: String,
    required: true
},
age: {
type: Number    
},
nationality:{
    type: String,
    required: true
}
})
const Player = mongoose.model('Player', PlayerSchema);
module.exports = Player;