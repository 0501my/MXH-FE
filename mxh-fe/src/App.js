import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ShowHome from "./pages/ShowHome";
import Register from "./pages/Register";
import MyAbout from "./pages/MyAbout";
import MyTimeLine from "./pages/MyTimeLine";
import About from "./pages/About";
import TimeLine from "./pages/TimeLine";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
        <Route path="/registers" element={<Register/>}/>
        <Route path="/home" element={<Home/>}>
            <Route path={""} element={<ShowHome/>}/>
            <Route path={"myAbout"} element={<MyAbout/>}/>
            <Route path={"about/:idAccount"} element={<About/>}/>
            <Route path={"myTimeLine"} element={<MyTimeLine/>}/>
            <Route path={"timeLine/:idAccount"} element={<TimeLine/>}/>
        </Route>
    </Routes>
  )
}

export default App;
