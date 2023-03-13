import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="posts/:id" element={<EditPost/>}/>
    </Routes>
  );
}

export default App;
