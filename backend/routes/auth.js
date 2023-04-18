const { Router } = require("express");
const router = Router();
const bcrypt = require("bcryptjs");
const user = require("../database/schema/user");

// function to register user
router.post("/register", async (req, res) => {
  const { userName, password, email } = req.body;

  try {
    const encryptedPassword = await bcrypt.hash(password, 10); // password encryption
    await user.create({
      userName,
      password: encryptedPassword,
      email,
    });

    res.send({ status: "ok" });
  } catch (err) {
    console.log(err);
  }
});


// log in function

router.post('/Login', async (req, res) => {
  const {userName, password} = req.body

   await user.findOne({userName : userName}, 'password') // search database to see if the particular username exixts
   .then( async (user) => {
      
    await bcrypt.compare(password, user.password)  // decrypt the passord and compare it with the password provided by the user
    .then(passwordCheck => {
      if(passwordCheck)  res.status(200).send('user found')
      else if(!passwordCheck) res.status(404).send('user not found')
    })

  }) 
  })
  
//function to get all data in the database

router.get("/", (req, res) => {
  user.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
  
});

module.exports = router;
