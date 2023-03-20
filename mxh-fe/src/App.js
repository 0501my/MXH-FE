import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ShowHome from "./pages/ShowHome";
import Register from "./pages/Register";
import MyAbout from "./pages/MyAbout";
import MyTimeLine from "./pages/MyTimeLine";
import PersonalPage from "./pages/PersonalPage";
import PostDetail from "./pages/posts/PostDetail";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/registers" element={<Register/>}/>
            <Route path="/:idPost" element={<PostDetail/>}/>
            <Route path="/home" element={<Home/>}>
                <Route path={""} element={<ShowHome/>}/>
                <Route path={"PersonalPage"} element={<PersonalPage/>}>
                    <Route path={"MyAbout/:idAccount"} element={<MyAbout/>}/>
                    <Route path={"MyTimeLine/:idAccount"} element={<MyTimeLine/>}/>
                </Route>
            </Route>
        </Routes>
    )
}

export default App;
