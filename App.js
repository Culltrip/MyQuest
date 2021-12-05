import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Redirect, Switch, Link } from 'react-router-dom';
import { render } from "react-dom";
import Register from "./frontend/register.js";
import CharCreate from "./frontend/CharCreate.js";
import TaskPage from "./frontend/TaskPage.js";

export default function App() {

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/> 
          <Route path="/charcreate" element={<CharCreate/>}/>
          <Route path="/taskPage" element={<TaskPage/>} />      
        </Routes>
    </Router>
  );
    
}
