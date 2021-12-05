import { StatusBar } from "expo-status-bar";
import { BrowserRouter as Router, Route, Routes, Redirect, Switch, Link } from 'react-router-dom';
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import logo from './assets/QU3ST2.png';
import bg from './assets/background.png';
import Register from "./register";
import textStyling from './assets/textStyling.css';

export default function Login() {
     const [state, setState] = useState(
        {
            loginName: "",
            loginPassword: ""
        }
    );

    // const [message,setMessage] = useState('');
    // const email = useRef(null);
    // const pwd = useRef(null);
    // loginRes = useRef(null);
    // const usernameMsg = useRef(null);
    // const userpassMsg = useRef(null);

    // const handleChange = (e) =>
    // {
    //     setState(
    //         {
    //             ...state, 
    //             [e.target.name]: e.target.value
    //         }
    //     )
    // }

    // function handleSubmit(e) {
    //     e.preventDefault();

    //     if(state.loginName == "") {
    //         userpassMsg.current.style.display = "none";
    //         setMessage('Please provide a username');
    //         usernameMsg.current.style.display = "none";
    //         undefined.current.focus();
    //         return;
    //     }
    //     else if (state.loginPassword === "") {
    //         usernameMsg.current.style.display = "none";
    //         setMessage('Please provide a password');
    //         userpassMsg.current.style.display = "inline-block";
    //         pwd.current.focus();
    //         return;
    //     }
    //     else {
    //         usernameMsg.current.style.display = "none";
    //         userpassMsg.current.style.display = "none";
    //         doLogin(e);
    //     }
    // }

    // const doLogin = async event => {
    //     var obj = {login:state.loginName, password:state.loginPassword};
    //     var js = JSON.stringify(obj);

    //     var config = {
    //         method: 'post',
    //         //url:
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         data: js 
    //     };
    //    axios(config)
    //         .then((response) => {
    //             const res = response.data;
    //             if (!res) {
    //                 setMessage('No response from the server...');
    //                 loginRes.current.style.display = "inline-block";
    //                 return;
    //             }

    //             storage.storeToken(res.token);

    //             const firstName = res.first_name;
    //             const lastName = res.last_name;

    //             const user = {firstName:firstName,lastName:lastName}
    //             localStorage.setItem('user_data', JSON.stringify(user));
    //             props.onLogin(true);
    //         })
    //         .catch(function (error)  {
    //             if (error.response) {
    //                 setMessage(error.response.data?.error);
    //                 loginRes.current.style.display = "inline-block";
    //             }
    //         });
    // }

   return (
    <View style={styles.wrap}>
      <ImageBackground source={bg} style={{width: '100%', height: '100%', alignItems: 'center'}}>

      <View style={styles.menuWrap}>
      <StatusBar style="auto" />

      <Image source={logo} style={{ width: 750, height: 300 }} /> 

      <div className="loginTitle">Where your everyday tasks make you the hero.</div>

      <View style={[styles.inputView, styles.shadowProp]}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={[styles.inputView, styles.shadowProp]}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.loginBtn, styles.shadowProp]}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <div className="subText">New here, adventurer? Begin your journey </div>

      <TouchableOpacity style={[styles.registerBtn, styles.shadowProp]}>
        <Link to='/register' >Register</Link>
      </TouchableOpacity>

    </View>
    </ImageBackground>
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

  menuWrap:{
    backgroundColor: "#FBE8B3",
    marginTop: 30,
    borderRadius: 25,
    width: 800,
    height: "90%",
    alignItems: "center",
    borderColor : "#C92D2D",
    borderWidth: 4,
    overflow: "hidden",
  },

  wrap:{
    align: "center",
    backgroundColor:"#a6dee3",
    alignItems: "center",
    justifyContent: "center",
    flex: "1",
  },

  image: {
    marginTop: -10,
    marginBottom: 20,
    width: 300,
    height: 100,
  },

  inputView: {
    backgroundColor: "#A1869E",
    borderRadius: 30,
    width: "30%",
    height: 40,
    marginBottom: 14,
    alignItems: "center",
  },

  loginText:{
    fontFamily: "Garamond, serif",
    fontWeight: "bold",
    color: "white",
  },

  TextInput: {
    height: 50,
    flex: 1,
    textAlign: 'center',
  },

  forgot_button: {
    height: 30,
    paddingTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    fontFamily: "Garamond, serif",
    fontSize: 14,
    fontWeight: "bolder",
    marginTop: -10,
    marginBottom: 10,
    padding: 20,
  },

  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#797596",
  },

  registerBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#797596",
  },
});