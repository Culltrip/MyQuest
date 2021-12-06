import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Redirect, Switch, Link } from 'react-router-dom';
import { render } from "react-dom";
import Register from "./frontend/Register.js";
import CharCreate from "./frontend/CharCreate.js";
import QuestForm from "./frontend/components/QuestPage";
import Login from "./frontend/login.js";
import './App.css';
import CanvasPage from "./frontend/components/CanvasPage.js";
import NavigationBar from "./frontend/components/NavBar.js";
import { Container } from "react-bootstrap";

export default function App() {

  const token = localStorage.getItem("token")
  console.log(token);
    // true == active user (logged in)
    const [state, setState] = useState(token !== null && token !== "" ? true : false);

    // Set user vars to access the Canvas page
    function onLogin(active)
    {
        setState(active);
        return <Redirect to="/canvas"/>
    }

    // clear all fields on logout
    function onLogout(active)
    {
        setState(active);
        return <Redirect to="/" />
    }

    function getUser(token) {

    }

    return (
      /* <NavigationBar active={state} onLogout={onLogout}/> */
      <Router>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/> 
            <Route path="/charcreate" element={<CharCreate/>}/>
            <Route path="/questPage" element={<QuestForm/>} /> 
            <Route path="/canvas" element={<CanvasPage/>} > 
            {/* {state ? <CanvasPage /> : <Redirect to="/" />} */}
            </Route>
          </Routes>
      </Router>
  );
    
}
