import "./App.css";
import { Routes, Route } from "react-router-dom";
import LogIn from "./components/login/login";
import Register from "./components/login/register";
import MainDisplay from "./components/MainDisplay/MainDisplay";
import Items from "./components/ItemsComponents/clothingItems/items";
import { RequireAuth } from "react-auth-kit";
import { ItemsProvider } from "./context/itemsContext";

function App() {
  return (

<ItemsProvider>    
    <div className="">
      <Routes>
        <Route exact path="/" element={<LogIn />} />
        <Route exact path="/Register" element={<Register />}></Route>
        <Route
          exact
          path="/items"
          element={
            <RequireAuth loginPath="/">
              <Items />
            </RequireAuth>
          }
        ></Route>

        <Route
          exact
          path="/Main"
          element={
            <RequireAuth loginPath="/">
              <MainDisplay />
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
    </ItemsProvider>
  );
}


export default App;
