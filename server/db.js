const mongoose = require('mongoose')

mongoose
  .connect('mongodb://mongo:27017/payments', { useNewUrlParser: true })
  .catch(e => {
    console.error('Ошибка подключения', e.message)
  })

const db = mongoose.connection

module.exports = db