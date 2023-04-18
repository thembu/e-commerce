import { useState } from 'react';
import logo from './my_logo.jpg'
import userAddon from './user.png'
import passwordAddon from './password.png'
import {Link} from 'react-router-dom'

function Register() {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')


  const handleSubmit = (e) => {
   e.preventDefault()
  fetch('/api/v1/auth/register', {
    method : 'POST',
    crossDomain : true,
    headers : {
      "content-Type": "application/json",
      Accept : "application/json",
      "Access-Control-Allow-Origin":""
    },

    body : JSON.stringify({
      userName,
      password,
      email
    })
    
  })

  .then(res => res.json())
  .then((data) => {
    console.log(data, 'userRegistered')
    window.location.replace("/")
})
  }
    return ( 

    <>

<img className="col" src={logo} width="350px" />

<form action ='POST' className='form-control ' style={{background: 'whitesmoke', border : 'none'}} >
<div className="input-group mb-3 space-top w-25 mx-auto">
  <span className="input-group-text" id="basic-addon1">
    <img src={userAddon} alt="" width={'30px'} height={'30px'} style={{border : 'none'}} />
  </span>
  <input
    type="text"
    className="form-control"
    placeholder=" enter Username"
    aria-label="Username"
    aria-describedby="basic-addon1"
    onChange={(e) => {
      e.preventDefault()
      setUserName(e.target.value)
    }}
  />
</div>
<div className=" input-group mb-3 w-25 col-sm-3 space-left">

    <span className="input-group-text" id="basic-addon1">
          <img src={passwordAddon} width='30px' height='30px' style={{border: 'none'}} />
        </span>

  <input
    type="password"
    className="form-control"
    id="inputPassword"
    placeholder=" enter password"
    onChange={(e) => {
    e.preventDefault()
      setPassword(e.target.value)
    }}
  />
</div>

<div className='input-group mb-3 w-25 col-sm-3 space-left'>
<span className="input-group-text" id="basic-addon1">
  @
  </span>

  <input
    type="email"
    className="form-control"
    id="inputEmail"
    placeholder=" enter email"
    onChange={(e) => {
    e.preventDefault()
      setEmail(e.target.value)
    }}
  />

</div>


<div id= 'btn btn-primary' className=" col-md-12 text-center">
 <Link to='/'><button className='btn btn-primary' onClick={handleSubmit}>submit</button></Link>
</div>
</form>

</>
)

}

export default Register;