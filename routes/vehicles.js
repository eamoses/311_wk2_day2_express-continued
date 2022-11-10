const express = require('express')
const router = express.Router()

const vehiclesController = require('../controllers/vehicles')

router.get('/vehicles', vehiclesController.list)

router.get('/vehicle/:_id', vehiclesController.show)

router.post('/vehicles', vehiclesController.create)

module.exports = router