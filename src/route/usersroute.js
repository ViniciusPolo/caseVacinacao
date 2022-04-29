const express = require('express')
const router = express.Router()

const usersController = require('../controller/usersController')

router.post('https://api-teste-lewe.herokuapp.com/api/basedata', usersController.store)
router.get('/filtro', usersController.index)

module.exports = router