const {Router} = require('express')
const user = require('../database/schema/user')
const User = require('../database/schema/user')


const router = Router()

router.post('/register', async (req, res) => {
  const {username, password , email} = req.body

  const userDB = await User.findOne({$or : [{username}, {email}]})

  if(userDB) {
    res.status(400).send({msg : 'user already exists'})
  }
  else {
    const newUser = await User.create({username, password, email})
    newUser.save()
    res.send(201)
  }

})

  router.get('/', (req, res) => {
    User.find((err, data) => {
        if(err) {
          res.status(500).send(err)
        } else {
          res.status(200).send(data)
        }
    })
  })





module.exports = router