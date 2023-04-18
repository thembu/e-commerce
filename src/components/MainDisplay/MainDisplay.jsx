import React from "react";
import "./MainDisplay.css";
import sale from "./sale1.jpg";
import tv from './tv.jpg'
import laptop from './laptop.jpg'
import logo from '../login/my_logo.jpg'
import console from './console.jpg'
import short from '../ItemsComponents/clothingItems/short1.jpg'
import { Link } from "react-router-dom";
function MainDisplay() {
  return (
    <div className="contain1">
        
        <nav className="navbar navbar-expand-lg bg-dark col-12" data-bs-theme="dark">
        <a className="navbar-brand bg-dark" data-bs-theme="dark" href="/#">
          <img src={logo} width="50px" height="50px" alt=''/>
        </a>

        <form className="d-flex" role="search"></form>
        <input
          className="form-control me-2"
          type="search"
          placeholder="search"
          aria-label="search" />
        <button className="btn btn-outline-primary" type="submit">
          Search
        </button>
      </nav>

      <nav className="navbar-nav me-auto mb-2 bg-secondary">
        <ul className="navbar nav bg-dark">
          <li className="nav-item bg-dark">
            <h3 className="bg-dark">Home</h3>
          </li>
          <li className="nav-item bg-dark">
            <h3 className="bg-dark">Products</h3>
          </li>
          <li className="nav-item bg-dark ">
            <h3 className="bg-dark">About us</h3>
          </li>
           </ul>
           </nav>
    <div className="row">
      <div className="col-2">
      <div className="display">
      <div className="categories">
        <div className="card" style={{ width: "12rem" }}>
          <ul className="list-group list-group-flush">

            <li className="list-group-item">Electronics</li>
            <li className="list-group-item">Shoes</li>
            <Link to='MainPage/Items/ClothingItems'><li className="list-group-item">Clothes</li></Link>
            <li className="list-group-item">Accessories</li>
            <li className="list-group-item">Food</li>
            <li className="list-group-item">Health care</li>
            <li className="list-group-item">Food</li>
            <li className="list-group-item">Fitness</li>
            <li className="list-group-item">Toys</li>

          </ul>
        </div>
      </div>


     <div className="deals">
     <div className="card" style={{width :'12rem', borderRadius:'1px'}}>
     <h2 className="card-title">Hot Deals</h2>
      <div className="card-body">
      <img src={short} class="card-img" alt="..."/>
        <p className="card-text">Lorem, ipsum dolor.  R1000</p>
      </div>
     </div>
     </div>
      

    </div>

      </div>
      <div className="col-6">
      <div className="card bg-dark">
        <img src={sale} className="card-img-top" alt="..." />
        <div
          className="card-body"
          style={{ color: "white", cursor: "pointer" }}
        >
          <h5 className="card-title">Shop Now</h5>
          <p className="card-text">First 100 customers get free shipping</p>
          <p className="card-text">
            <small className="text-muted">offer ends at 20 January 2023</small>
          </p>
        </div>
       </div>

       <h1>New products</h1>

        <div className="card-group">
          <div className="card">
            <img src={tv} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Lorem, ipsum dolor.</h5>
              <p className="card-text">
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div className="card">
            <img src={console} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Lorem, ipsum dolor.</h5>
              <p className="card-text">
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div className="card">
            <img src={laptop} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Lorem, ipsum dolor.</h5>
              <p className="card-text">
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
}

export default MainDisplay;