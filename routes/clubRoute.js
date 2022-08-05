const express = require('express')
const app = express()

const {getclubs, createclub, getOneclub, deleteOneclub, updateclub} = require('../controllers/clubController')

const routes = express.Router()

routes.route('/:_id').get(getOneclub).delete(deleteOneclub).patch(updateclub)
routes.route('/').get(getclubs).post(createclub)

module.exports = routes
