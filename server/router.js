const express = require('express')
const controller = require('./controller')
const router = express.Router()

router.post('/payment', controller.createPayment)
router.get('/payment/:id', controller.getPaymentById)
router.get('/payments', controller.getPayments)

module.exports = router