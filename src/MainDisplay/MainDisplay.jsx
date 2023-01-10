import React from "react";
import "./MainDisplay.css";
import sale from "./sale1.jpg";
import tv from './tv.jpg'
import laptop from './laptop.jpg'
import console from './console.jpg'

function MainDisplay() {
  return (
    <div className="contain1">
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
  );
}

export default MainDisplay;
