const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db')
const paymentRouter = require('./router')

const app = express()
const PORT = 5000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB ошибка при подключении:'))

app.get('/', (req, res) => {
    res.send('Сервер работает!!!')
})

app.use('/api', paymentRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))