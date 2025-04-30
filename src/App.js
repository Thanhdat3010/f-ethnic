import React from "react";
import "./App.css";
import { Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./routes/Home";
import EthnicGroupsShowcase from "./routes/54dantoc";
import EthnicDetailPage from './routes/datadantoc';
import ChatBot from "./routes/chatbot";
import Dich from "./routes/dich";
function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/EthnicGroupsShowcase' element={<EthnicGroupsShowcase/>}/>
    <Route path="/ethnic-group/:id" element={<EthnicDetailPage />} />
    <Route path='/ChatBot' element={<ChatBot/>} />
    <Route path='/Dich' element={<Dich/>} />

    </Routes>
  </div>

  );
}

export default App;
