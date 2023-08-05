import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import NavbarComp from "./Component/NavbarComp";
import Header from "./Component/Header"
import './Style/navbarComp.scss';
import './Style/header.scss'
import Dropdown from "./Component/Dropdown";
import Searchcomponent from "./Component/Searchcomponent";
import Post from "./Component/Postad/Post";
import Dashboard from "./Component/Dashboard/Dashboard";
import Registration from "./Component/LoginRegistration/Registration/Registration";


function App() {
  const [islogged,setIslogged] = useState(false);
  useEffect(() => {
    if ('token' in localStorage) {
      setIslogged(true);
    } else {
      setIslogged(false);
    }
  },)
  
  return (
    <div className="App">
      <Router>
        <NavbarComp/>
        <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path="/search" element={<Searchcomponent/>}/>
          
          {console.log(islogged)}
           {islogged ?
            <>
              <Route path="/post" element={<Post/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
            </>:
              
              <Route element={<h1>Login first</h1>}/>
            }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
