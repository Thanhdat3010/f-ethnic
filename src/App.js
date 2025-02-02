import React from "react";
import "./App.css";
import { Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./routes/Home";
import EthnicGroupsShowcase from "./routes/54dantoc";
function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/EthnicGroupsShowcase' element={<EthnicGroupsShowcase/>}/>
    </Routes>
  </div>

  );
}

export default App;
