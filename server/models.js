const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Payment = new Schema(
  {
    cardNumber: { type: String, required: true },
    expirationDate: { type: String, required: true },
    cvv: { type: Number, required: true },
    amount: { type: Number, required: true }
  }
)

module.exports = mongoose.model('payments', Payment)