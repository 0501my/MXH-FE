
import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ShowHome from "./pages/ShowHome";
import AddPost from "./pages/AddPost";
import PersonalPage from "./pages/PersonalPage";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
        <Route path="/registers" element={<Register/>}/>
        <Route path="/home" element={<Home/>}>
            <Route path={""} element={<ShowHome/>}/>
            <Route path={"addPost"} element={<AddPost/>}/>
            <Route path={"personalPage"} element={<PersonalPage/>}/>
        </Route>
    </Routes>
  )
}

export default App;
