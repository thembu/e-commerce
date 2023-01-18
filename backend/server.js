const express = require("express")
const app = express()
const groceriesRoute = require('./routes/groceries')
const marketRoute = require('./routes/markets')
 
const port = 3001

//registers midddleware -> is a function which is called during the lifecycle of the request

app.use(express.json())
app.use(express.urlencoded())

app.use('/api/v1/groceries',groceriesRoute)

app.use('/api/v1/markets' ,marketRoute )

app.listen(port, () => {
  console.log("running server")
})


