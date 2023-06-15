import { useState } from "react";
import "./items.css";
import { Link, useNavigate } from "react-router-dom";
import clothes from "../../../res/photo_links";

function Items() {



  return (
    <>

<div className="content">


  { clothes.map((clothe) => 
    <ul>
    <li key={clothe.id}>
        <div className="background">
          <div className="card">
            <img src={clothe.url} alt="clothes" width={'150px'} />
            <h1 style={{color: 'black'}}>{clothe.name}</h1>
          </div>
        </div>
    </li>
      
    </ul>
  
  )
  
}

</div>

      <div className="logOut">
        <Link to="/Main">
          
          <button className="btn btn-primary">Home</button>

        </Link>
      </div>
    </>
  );
}

export default Items;
