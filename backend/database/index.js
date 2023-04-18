const mongoose = require('mongoose')

//our database coonection

mongoose
.connect('mongodb://127.0.0.1:27017/expressjs')
.then(() => console.log('connected to db') )
.catch((err) => console.log(err))
