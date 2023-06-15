import "./login.css";
import logo from "./my_logo.jpg";
import userAddon from "./user.png";
import passwordAddon from "./password.png";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignIn } from "react-auth-kit";

function LogIn() {

  const signIn = useSignIn()
  
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [page, setPage] = useState("/");
  const [Login, setLogin] = useState(false);

  const onSubmit = async (values) => {

    try {
      const res = await axios.post(
        "api/v1/auth/Login", {
          userName : userName,
          password : password
        }
      );
      
      console.log(res)
      signIn({
        token : res.data.token,
        expiresIn : 3600,
        tokenType : 'Bearer',
        authState : {userName : userName}
      })
     
      setPage('Main')
      console.log(page)

    } catch (err) {
      console.log('error');
    }
  };

  return (
    <>
      <img className="col" src={logo} width="350px" height="300px" />

      <form
        action="POST"
        onSubmit={onSubmit}
        className="form-control "
        style={{ border: "none" }}
      >
        <div className="input-group mb-3 space-top w-25 mx-auto">
          <span className="input-group-text" id="basic-addon1">
            <img
              src={userAddon}
              width="30px"
              height="30px"
              style={{ border: "none" }}
            />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="userName"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              e.preventDefault();
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className=" input-group col-sm-3 mb-3 w-25 space-left">
          <span className="input-group-text" id="basic-addon1">
            <img
              src={passwordAddon}
              width="30px"
              height="30px"
              style={{ border: "none" }}
            />
          </span>

          <input
            type="password"
            className="form-control"
            name="password"
            id="inputPassword"
            placeholder="password"
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
          />
        </div>

        <div id="btn" className="col-md-12 text-center">
          <Link to={page}>
            <button className="btn btn-primary" onClick={onSubmit}>
              Log In
            </button>
          </Link>
          <Link to="/Register">
            <button className="btn btn-primary">Register</button>
          </Link>
        </div>
      </form>
    </>
  );
}

export default LogIn;
