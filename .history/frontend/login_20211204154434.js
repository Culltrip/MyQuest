import { StatusBar } from "expo-status-bar";
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
// import textStyling from './src/textStyling.css';

export default function Login() {
     const [state, setState] = useState(
        {
            loginName: "",
            loginPassword: ""
        }
    );

    const [message,setMessage] = useState('');
    const email = useRef(null);
    const pwd = useRef(null);
    loginRes = useRef(null);
    const usernameMsg = useRef(null);
    const userpassMsg = useRef(null);

    const handleChange = (e) =>
    {
        setState(
            {
                ...state, 
                [e.target.name]: e.target.value
            }
        )
    }

    function handleSubmit(e) {
        e.preventDefault();

        if(state.loginName == "") {
            userpassMsg.current.style.display = "none";
            setMessage('Please provide a username');
            usernameMsg.current.style.display = "none";
            undefined.current.focus();
            return;
        }
        else if (state.loginPassword === "") {
            usernameMsg.current.style.display = "none";
            setMessage('Please provide a password');
            userpassMsg.current.style.display = "inline-block";
            pwd.current.focus();
            return;
        }
        else {
            usernameMsg.current.style.display = "none";
            userpassMsg.current.style.display = "none";
            doLogin(e);
        }
    }

    const doLogin = async event => {
        var obj = {login:state.loginName, password:state.loginPassword};
        var js = JSON.stringify(obj);

        var config = {
            method: 'post',
            //url:
            headers: {
                'Content-Type': 'application/json'
            },
            data: js 
        };
       axios(config)
            .then((response) => {
                const res = response.data;
                if (!res) {
                    setMessage('No response from the server...');
                    loginRes.current.style.display = "inline-block";
                    return;
                }

                storage.storeToken(res.token);

                const firstName = res.first_name;
                const lastName = res.last_name;

                const user = {firstName:firstName,lastName:lastName}
                localStorage.setItem('user_data', JSON.stringify(user));
                props.onLogin(true);
            })
            .catch(function (error)  {
                if (error.response) {
                    setMessage(error.response.data?.error);
                    loginRes.current.style.display = "inline-block";
                }
            });
    }

  return (
    <View style={styles.wrap}>
        <Router>
        <Switch>
          <Route path="/" element={<Login/>} />
          <Route path="/Register" exact>
            <Register />
          </Route>
        </Switch>
      </Router>
      </View>
);
  }