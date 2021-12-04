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
import Login from "./frontend/Login.js";
import { BrowserRouter as Router, Route, Routes, Redirect, Switch, Link } from 'react-router-dom';
import { render } from "react-dom";
import Register from "./frontend/register.js";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
       <Router>
        <Switch>
          <Route path="/" element={<Login/>} />
          <Route path="/Register" exact>
            <Register />
          </Route>
        </Switch>
      </Router>
  );
}
