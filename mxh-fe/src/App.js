
import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ShowHome from "./pages/ShowHome";
import PersonalPage from "./pages/PersonalPage";
import Register from "./pages/Register";
import {GoogleLoginButton} from "react-social-login-buttons";
import {LoginSocialGoogle} from "reactjs-social-login";
import LoginGoogle from "./pages/LoginGoogle";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
        <Route path="/registers" element={<Register/>}/>
        <Route path="/home" element={<Home/>}>
            <Route path={""} element={<ShowHome/>}/>
            <Route path={"personalPage"} element={<PersonalPage/>}/>
        </Route>
    </Routes>
  )
}

export default App;
