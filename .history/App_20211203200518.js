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
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';
import { render } from "react-dom";



export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  render() {
    return (
      <div>
        <Link to="./frontend/Login.js"></Link>
      </div>
    );
  }

  return (
    <Router>

    </Router>


  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  wrap:{
    align: "center",
    backgroundColor:"#a6dee3",
    alignItems: "center",
    justifyContent: "center",
    flex: "1",
  },

  image: {
    marginBottom: 40,
    width: 300,
    height: 100,
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "30%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    textAlign: 'center',
  },

  forgot_button: {
    height: 30,
    paddingTop: 20,
    marginBottom: 30,
    alignItems: 'center',
  },

  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});
