const {Router} = require('express')

const router = Router()

const groceriesList = [{item : 'milk', quantity : 6}]

//get request

router.get("/", (req,res,next) => {
    console.log('before handling request')
    res.send(groceriesList)
}),

//post request

router.post("/", (req, res, next) => {
    console.log(req.body)
    groceriesList.push(req.body)
    res.send(201)
})

router.get('/:item', (req, res) => {
   const {item} = req.params
   const groceriesItem = groceriesList.find((g) => g.item === item)
   res.send(groceriesItem)
})

module.exports = router

