import React, { useContext } from "react";
import "./MainDisplay.css";
import logo from "../login/my_logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useSignOut } from "react-auth-kit";
import main_image from "./images";

function MainDisplay() {


 const signOut = useSignOut()
 const navigate = useNavigate()

 const logOut = () => {
  signOut()
  navigate('/')
 }

 const items  = (values) => {
     navigate('/items')
 }



  return (
    <div className="contain">

     <nav>
        <img  className= "logo" src={logo} alt="" width={'100px'} />
        <h1>Shoppy Store</h1>
        <img src={main_image.search} width="50px" alt="" />
        <img src={main_image.shopping_cart} width={'80px'} alt="" />        
      </nav>
        <div className="banner">
          <img className="main_image" src={main_image.main_image} alt="" width={'99%'} />
          <div className="sale"><h2>FRIDAY SALE FOR FURNITURE 50% OFF</h2></div>
          <button  id="button"  className="btn btn-primary" onClick={items}>Start Shopping</button>
        </div>

        <div id='items'>
          <div className="cards">
          <div className="card">
        <img src={main_image.electronics} alt="Avatar" width={'100%'} height={'300px'}/>
         <div className="container">
          <button className="btn btn-primary">Shop for electronics</button>
         </div>
         
            </div>

            <div className="card">
        <img src={main_image.shirt} alt="Avatar" width={'100%'} height={'300px'}/>
         <div className="container">
          <button className="btn btn-primary" onClick={items}>Shop for Clothes</button>
         </div>
         
            </div>

            <div className="card">
        <img src={main_image.jewelry} alt="Avatar" width={'100%'} height={'300px'}/>
         <div className="container">
          <button className="btn btn-primary">Shop for Jewelry</button>
         </div>
         
            </div>
      </div>
    </div>
    </div>
  );
}

export default MainDisplay;
