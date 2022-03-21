const Payment = require('./models')

createPayment = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a payment',
    })
  }

  const payment = new Payment(body)

  if (!payment) {
    return res.status(400).json({ success: false, error: err })
  }

  payment
    .save()
    .then(() => {
      return res.status(201).json({
        RequestId: payment._id,
        Amount: payment.amount
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Payment not created!',
      })
    })
}

getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findOne({ _id: req.params.id })
    return res.status(200).json({
      success: true,
      payment
    })
  } catch (e) {
    return res.status(500).json(e)
  }
}

getPayments = async (req, res) => {
  try {
    const payments = await Payment.find()
    return res.status(200).json({
      success: true,
      payments
    })
  } catch (e) {
    return res.status(500).json(e)
  }
}

module.exports = {
  createPayment,
  getPayments,
  getPaymentById,
}