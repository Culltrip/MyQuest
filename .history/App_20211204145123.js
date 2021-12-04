import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import logo from './frontend/assets/QU3ST2.png';
import Login from "./frontend/Login.js";
import CharCreate from "./frontend/CharCreate.js";
import Task from "./frontend/components/Task.js";
import { BrowserRouter as Router, Route, Routes, Redirect, Switch, Link } from 'react-router-dom';
import { render } from "react-dom";
import Register from "./frontend/register";



export default function App() {

  return (
    <div className="pageSolid">

      <Router>
        <Switch>
          <Route path="/Login" exact>
            <Login />
          </Route>
          <Route path="/Register" exact>
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>


  
  );
}
