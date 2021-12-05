import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Redirect, Switch, Link } from 'react-router-dom';

import Login from "./frontend/Login.js";
import Register from "./frontend/Register.js";
import TaskPage from "./frontend/TaskPage.js";

export default function App() {

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/> 
          <Route path="/taskPage" element={<TaskPage/>} />      
        </Routes>
    </Router>
  );
    
}
