import { StatusBar } from "expo-status-bar";
import { BrowserRouter as Router, Route, Routes, Redirect, Switch, Link, useParams } from 'react-router-dom';
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
import Dashboard from './components/Dashboard'
import Table from './table'

export default function Dash() {
  //var obj = {email:"",password:""}
  const [errorMessage, setErrorMessage] = React.useState("");
  var cod = JSON.parse(localStorage.getItem('user_data'));
  var index;
  var curr_quest_id;
  var token = cod.Token
  var questName = '';
  var description = '';

  var questArr = [
    {
      name:"name",
      description:"description1"
    }
  ]

   const columns = React.useMemo(
    () => [
      {
        Header: "Quest Log",
        columns: [
          {
            Header: "Quest Title",
            accessor: "name"
          },
          {
            Header: "Quest Description",
            accessor: "description"
          }
        ]
      }
    ]
  );
 
  console.log(columns);

  console.log(cod);
  const doLogout = async event => 
  {
    window.location.href = '/..';
  }
  const doAdd = async event => 
  {
    window.location.href = '/add';
  }

  const getQuests = async event => 
  {
    console.log(cod);
      //event.preventDefault();
      // FIXME: Pull Login And Password From Our Fields
      var obj = {};
      var js = JSON.stringify(obj);
      try
      {    
          //
          const response = await fetch('http://quest-task.herokuapp.com/api/listQuests',
              {method:'POST',body:js,headers:{'Content-Type': 'application/json', 'Authorization': token}});

          var res = JSON.parse(await response.text());
          console.log(res);
            if( res.error )
            {
              console.log("error getting quest id list");
              console.log(res.error)
              setErrorMessage(res.error.message);
            }
            else
            {
                console.log("no error getting quest id list");
                var hen = res.quests;
                //var quests = {FirstName:res.FirstName,LastName:res.LastName, Token:res.Token}
                //localStorage.setItem('quests', JSON.stringify(quests));
                //console.log(user);
                // TODO: Route To Dashboard Page And Send User Info
                // window.location.href = '/';
                // For Loop To View All Quest IDs

                quests = [];
                for (let i = 0; i < hen.length; i++) 
                {
                  curr_quest_id = hen[i];
                  index = i;
                  viewQuests();
                }
    
                  // curr_quest_id = questID[i]
                  // index = i
                  // viewQuest (within this we set  = return value)
            }
      }
      catch(e)
      {
          alert(e.toString());
          return;
      }    
  };
  const viewQuests = async event => 
  {
    console.log(cod);
      //event.preventDefault();
      // FIXME: Pull Login And Password From Our Fields
      var obj = {id:curr_quest_id};
      var js = JSON.stringify(obj);
      try
      {    
          //
          const response = await fetch('http://quest-task.herokuapp.com/api/viewQuest',
              {method:'POST',body:js,headers:{'Content-Type': 'application/json', 'Authorization': token}});

          var res = JSON.parse(await response.text());
          console.log(res);
            if( res.error )
            {
              console.log("error reading quests");
              console.log(res.error)
              setErrorMessage(res.error.message);
            }
            else
            {
                console.log("no error reading quests");
                console.log(res.quest);
                var quests = {
                  questName:res.quest.name,
                  description:res.quest.description, 
                  // isFinised:res.name.isFinised,
                  // dueDate:res.name.due,
                  // urgency:res.name.urgency
                };

                questArr.push(res.quest);

                questName = res.quest.name;
                description=res.quest.description;
                console.log(questName)
                console.log(description)

                

                //localStorage.setItem('quests', JSON.stringify(quests));
                //console.log(user);
                // TODO: Route To Dashboard Page And Send User Info
                // window.location.href = '/';
            }
      }
      catch(e)
      {
          alert(e.toString());
          return;
      }    
  };

  // const viewTable = (
  //   <View>
  //     <Table questName={questName} description={description} />
  //   </View>
  // )



  // Function To Log User In
  // Takes Email and 
  // Returns Error JSON If Error Occured
  // Returns Token If Valid
  const doLogin = async event => 
  {
      console.log(obj);
      //event.preventDefault();
      // FIXME: Pull Login And Password From Our Fields
      //var obj = {email:"culltrip@gmail.com",password:"COP4331!p"};
      var js = JSON.stringify(obj);
      try
      {    
          //
          const response = await fetch('http://quest-task.herokuapp.com/api/login',
              {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

          var res = JSON.parse(await response.text());
          //console.log(res);
            if( res.error )
            {
              console.log(res.error)
              setErrorMessage(res.error.message);
            }
            else
            {
                console.log("no error");
                //var user = {FirstName:res.FirstName,LastName:res.LastName, Token:res.Token}
                localStorage.setItem('user_data', JSON.stringify(user));
                //console.log(user);
                // TODO: Route To Dashboard Page And Send User Info
                window.location.href = '/dash';
            }
      }
      catch(e)
      {
          alert(e.toString());
          return;
      }    
  };

     const [state, setState] = useState(
        {
            loginName: "",
            loginPassword: ""
        }
    );

    const setEmail = (email) => {
      obj.email = email;
    }
    const setPassword = (password) => {
      obj.password = password;
    }

    function ShowDashboard() {
      var obj = {id:curr_quest_id};
      const [title, setTitle] = useState([])
      const [description, setDescription] = useState([])
      const [quest, setQuest] = useState([])
      const {quest_id} =useParams()

      
      const listView = (
        <Dashboard
          title={quest.title}
          description={quest.description}
          />
      )

    }





    // const [message,setMessage] = useState('');
    // const email = useRef(null);
    // const pwd = useRef(null);
    // loginRes = useRef(null);
    // const usernameMsg = useRef(null);
    // const userpassMsg = useRef(null);

   //        const handleChange = (e) =>
  //      {
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
      <div className="regTitle">Welcome Hero!</div>
      <TouchableOpacity onPress = {() => doLogout()} style={[styles.registerBtn, styles.shadowProp]}>
        <Text style={styles.loginText}>Logout</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress = {() => doAdd()} style={[styles.registerBtn, styles.shadowProp]}>
        <Text style={styles.loginText}>Add Quest</Text>
      </TouchableOpacity>
      <div className="regTitle">Quest Log</div>
      <View style={[styles.inputView, styles.shadowProp]}>
        <TextInput
          style={styles.TextInput}
          placeholder="Search"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
     
      {/* <Dashboard /> */}
      {/* {ShowDashboard} */}
      {/* <Table columns={quests.questName} data={quests.description} /> */}
      
      <View>
        <Table columns={columns} data={questArr} />
      </View>

      <TouchableOpacity onPress = {() => getQuests()} style={[styles.registerBtn, styles.shadowProp]}>
        <Text style={styles.loginText}>Complete</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress = {() => doLogout()} style={[styles.registerBtn, styles.shadowProp]}>
        <Text style={styles.loginText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => doLogout()} style={[styles.registerBtn, styles.shadowProp]}>
        <Text style={styles.loginText}>Delete</Text>
      </TouchableOpacity>
      
      {errorMessage && (<p className="error"> {errorMessage} </p>)}
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