
import LogIn from "./components/login/login";
import Register from "./components/login/register";
import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
import Clothes from "./components/ItemsComponents/clothingItems/ClothingItems";
import MainDisplay from "./components/MainDisplay/MainDisplay";
import App from "./App";

function Navigate() {
    return ( 
    
    <>
    
<div className='contain'>
  <Router>
    <Routes>
      <Route exact path="/" element={<App/>}></Route>
      <Route exact path='/LogIn' element={<LogIn/>}></Route>
      <Route exact path='/Register' element={<Register/>}></Route>
      <Route exact path='/MainPage' element={<MainDisplay/>}></Route>
      <Route path='MainPage/Items/Clothingitems' element={<Clothes/>}></Route>
    </Routes>
  </Router>
  </div>
    
    </> );
}

export default Navigate;