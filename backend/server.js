import express from 'express'
import dotenv  from 'dotenv'
import products from './data/products.js'


dotenv.config()

//const bodyParser = require('body-parser')
//const cors = require('cors')
const app = express()

//app.use(bodyParser.json({ limit: "30mb", extended:true}));
//app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
//app.use(cors());

app.get('/', (req, res) => {
    res.send('API is Runnig...')
})
app.get('/api/products', (req, res) => {
    res.json(products)
})
app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))