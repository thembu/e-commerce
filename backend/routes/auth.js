const { Router } = require("express");
const router = Router();
const bcrypt = require("bcryptjs");
const user = require("../database/schema/user");
const jwt = require('jsonwebtoken');
const { useParams } = require("react-router-dom");
const JWT_SECTRET = 'FHIEWGWIFEGFIUEGQEFIIGQIUUGEIGIFGQ'
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


  const users = await user.findOne({userName : userName})
  .catch((err) => {
    console.log('Error' , err)
  })


  if (!users)
  return res
  .status(400)
  .json({msg : 'username found'})


  
 passwordCheck =  await bcrypt.compare(password, users.password)


 if(!passwordCheck)
 return res
 .status(400)
 .json({msg : 'password wrong'})
    
  const jwtToken = jwt.sign({id: user._id , users : password} , JWT_SECTRET)
  res.json({message : 'hello welcome back', token : jwtToken})

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
