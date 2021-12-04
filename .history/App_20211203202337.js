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



export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="./frontend/login.js" element={<Login/>}/>
      </Routes>
    </Router>


  
  );
}
