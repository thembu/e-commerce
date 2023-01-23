const express = require("express")
const app = express()
const mongoose = require('mongoose')
const groceriesRoute = require('./routes/groceries')
const marketRoute = require('./routes/markets')
const authRoute = require('./routes/auth')
require('./database')
const port = 3001

mongoose.set('strictQuery', true)




//registers midddleware -> is a function which is called during the lifecycle of the request

app.use(express.json())

app.use('/api/v1/groceries',groceriesRoute)

app.use('/api/v1/markets' ,marketRoute )

app.use('/api/v1/auth', authRoute)

app.listen(port, () => {
  console.log("running server")
})


