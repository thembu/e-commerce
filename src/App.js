import "./App.css";
import MainDisplay from "./components/MainDisplay/MainDisplay";
import logo from "./my_logo.jpg";
import SideBar from "./components/SideBar/SideBar";
 

function App() {
  return (
    <div className="contain">
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <a className="navbar-brand" href="#">
          <img src={logo} width="50px" height="50px" />
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
        <ul className="navbar nav  ">
          <li className="nav-item">
            <h3>Home</h3>
          </li>
          <li className="nav-item">
            <h3>Products</h3>
          </li>
          <li className="nav-item  ">
            <h3>About us</h3>
          </li>
          <li className=" dropdown">
            <button
              className="btn btn-outline-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categories
            </button>
            <ul className=" dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Sports
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Electronics
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Clothing
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Accessories
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Fitness
                </a>
              </li>
            </ul>
          </li>
      </ul>
    </nav>
    <div className="row">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-8">
          <MainDisplay />
        </div>
      </div>
    </div>
  );
}

export default App;
