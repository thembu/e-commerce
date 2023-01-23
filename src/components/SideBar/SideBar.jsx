import React, { useEffect } from "react";
import "./SideBar.css";
import Sneaker from './sneaker.jpg'

function SideBar() {


  useEffect(() => {

    const fetchData =  () => {
        fetch('/api/v1/auth')
       .then((res) => res.json())
       .then((data) => console.log(data))

    }

    fetchData()
     
  }, [])
  

  return (
    <div className="display">
      <div className="categories">
        <div className="card" style={{ width: "12rem" }}>
          <ul className="list-group list-group-flush">

            <li className="list-group-item">Electronics</li>
            <li className="list-group-item">Shoes</li>
            <li className="list-group-item">Sport Wear</li>
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
      <img src={Sneaker} className="card-img" alt="..."/>
        <p className="card-text">Lorem, ipsum dolor.  R1000</p>
      </div>
     </div>
     </div>
      

    </div>
  );
}

export default SideBar;
