import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Redirect, Switch, Link } from 'react-router-dom';
import { render } from "react-dom";
import Register from "./frontend/Register.js";
import CharCreate from "./frontend/CharCreate.js";
import TaskForm from "./frontend/components/TaskForm";
import Login from "./frontend/login.js";
import './App.css';
import CanvasPage from "./frontend/components/CanvasPage.js";

export default function App() {

  const token = localStorage.getItem("token")
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

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/> 
          <Route path="/charcreate" element={<CharCreate/>}/>
          <Route path="/taskPage" element={<TaskForm/>} /> 
          <Route path="/canvas" element={<CanvasPage/>} > 
           {/* {state ? <CanvasPage /> : <Redirect to="/" />} */}
           </Route>
        </Routes>
    </Router>
  );
    
}
