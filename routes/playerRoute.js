const express = require('express')
const app = express()

const {getPlayers, createPlayer, getOnePlayer, deleteOnePlayer, updatePlayer} = require('../controllers/playersController')

const routes = express.Router()

routes.route('/:_id').get(getOnePlayer).delete(deleteOnePlayer).patch(updatePlayer)
routes.route('/').get(getPlayers).post(createPlayer)

module.exports = routes