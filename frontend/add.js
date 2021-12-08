import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Redirect, Switch, Link } from 'react-router-dom';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import logo from './assets/QU3ST2.png';
import textStyling from './assets/textStyling.css';


export default function Add() {
  const [errorMessage, setErrorMessage] = React.useState("");
  var obj = {name:"",description:"",urgency:"No", xPtotal:"0", due:"2021-11-05", isFinished:"0"}
  var cod = JSON.parse(localStorage.getItem('user_data'));
  var token = cod.Token
  const setname = (name) => {
    obj.name = name;
  }
  const setdescription = (description) => {
    obj.description = description;
  }

  const doAdd = async event => 
  {
      console.log(obj)
      //event.preventDefault();
      // FIXME: Pull Login And Password From Our Fields
      var js = JSON.stringify(obj);
      try
      {    
          //
          const response = await fetch('http://quest-task.herokuapp.com/api/createQuest',
              {method:'POST',body:js,headers:{'Content-Type': 'application/json', 'Authorization': token}});

          var res = JSON.parse(await response.text());
          //console.log(res);
          if( res.error )
          {
              // TODO: Send User Error Message
              console.log(res.error.message);
              setErrorMessage(res.error.message);
          }
          else
          {
              console.log("no error");
              console.log(res);
              //localStorage.setItem('regi_info', JSON.stringify(obj));
              console.log(obj);
              // This is where we will move to auth phase
              window.location.href = '/dash';
          }
      }
      catch(e)
      {
          alert(e.toString());
          return;
      }    
  };
  const goHome = async event => 
  {
    window.location.href = '/dash';
  }
  return (
    <View style={styles.wrap}>
    
      <StatusBar style="auto" />

      <View style={[styles.regBox, textStyling.bg]}>
      

      <div className="regTitle">Hello adventurer...</div>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Quest Title"
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setname(name)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Quest Description"
          placeholderTextColor="#003f5c"
          
          onChangeText={(description) => setdescription(description)}
        />
      </View>

      <TouchableOpacity onPress = {() => doAdd()} style={styles.loginBtn}> 
        <Text style={styles.buttonText}>Accept Quest</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress = {() => goHome()} style={styles.nvm}>
        <Text style={styles.buttonText}>Decline Quest</Text>
      </TouchableOpacity>
      {errorMessage && (<p className="error"> {errorMessage} </p>)}
      </View>
    </View>
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
    backgroundColor:"#a6dee3",
    alignItems: "center",
    justifyContent: "center",
    flex: "1",
  },

  regBox:{
    align: "center",
    backgroundColor: "#FBE8B3",
    borderColor : "#C92D2D",
    borderWidth : 3,
    alignItems: "center",
    justifyContent: "center",
    height: "90%",
    padding: "10",
    width: "60%",
    borderRadius: "10%",
  },

  image: {
    marginBottom: 40,
    width: 300,
    height: 100,
  },

  inputView: {
    backgroundColor: "#E5A4CB",
    borderColor : "#45062e",
    borderWidth : 2,
    borderRadius: 20,
    margin: 10,
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

  buttonText: {
    fontFamily: "Times",
    fontWeight: "bold",
    fontSize: 30,
    color: "#E5A4CB",
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
    backgroundColor: "#45062e",
  },

  nvm: {
    width: "30%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#45062e",
 },
});