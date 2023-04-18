import'./login.css'
import  logo from './my_logo.jpg'
import userAddon from './user.png'
import passwordAddon from './password.png'
import axios from 'axios'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { createClient } from 'pexels';


function LogIn () {


let url;

const client = createClient('yEVq5RAVSwexgrfJsXr9WNlqKQX66Sg1gLHHXFAR2zbixFsFLMqVz6ZG');

  
const query = 'shoes';


client.photos.search({ query, per_page: 1 }).then(photos => {
  url = `${photos.photos[0].src.small}`  
  

})



  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [page, setPage] = useState('/')
  const [Login, setLogin] = useState(false)

  const confifuration = {
    method : "post",
    url : '/api/v1/auth/Login',
    data :{
      userName,
      password
    }

  }

const handleSubmit = (e) => {
  axios(confifuration)
  .then((result) => {
    setPage('/MainPage')
    setLogin(true)
  })
  .catch((err) => {
    err = new Error()
  })
}
    
    return(
        <>
  

      <img className="col" src={url} width="350px" height="300px" />

      <form action='POST'   className='form-control ' style={{background: 'whitesmoke', border : 'none'}} >

      <div className="input-group mb-3 space-top w-25 mx-auto">
        <span className="input-group-text" id="basic-addon1">
          <img src={userAddon} width='30px' height='30px' style={{border: 'none'}} />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          name="userName"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e) => {
            e.preventDefault()
            setUserName(e.target.value)
          }}
        />
      </div>
      <div className=" input-group col-sm-3 mb-3 w-25 space-left">
      <span className="input-group-text" id="basic-addon1">
          <img src={passwordAddon} width='30px' height='30px' style={{border: 'none'}} />
        </span>

        <input
          type="password"
          className="form-control"
          name="password"
          id="inputPassword"
          placeholder="password"
          onChange={(e) => {
            e.preventDefault()
            setPassword(e.target.value)
          }}          
        />
      </div>
            
     <div id= 'btn' className="col-md-12 text-center">
     <Link to={page}><button className="btn btn-primary"  onClick={handleSubmit}>Log In</button></Link>
     <Link to='/Register'> <button className="btn btn-primary" >Register</button> </Link>
     
     </div>



   </form>
     
</>
    )

  }

export default LogIn