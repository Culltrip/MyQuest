import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams, Redirect } from "react-router-dom";
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View } from 'react-native';
import bg from "./../assets/background.png"
import TaskList from './TaskList.js';
import path from "./Path.js";
import NewListForm from './NewListForm';
import Accordion from '@mui/material/Accordion';
import Dashboard from './Dashboard';


function QuestList(id) {
    
    return new Promise((resolve, reject) => {

        const obj = {
            token: localStorage.getItem("token")
        };

        const config = {
            method: "post",
            url: path.listQuest,
            headers: {Authorization: `Bearer ${token}`},
            data: obj
        };
        axios(config)
            .then(function (response) {
                const res = response.data;
                if (res.error) {
                    // setMessage('Error adding list');
                    // addRes.current.style.display = "inline-block";
                    console.error(res.errorS);
                    return;
                }
                
                let param = null;
                if (res.length > 0)
                    param = {
                        id: res[0].id,
                        key: res[0].id,
                        title: res[0].title,
                        body: res[0].list || []
                    };

                resolve(param);
            })
            .catch(function (error) {
                if (error.response) {
                    // setMessage(error.response.data?.error);
                    // .current.style.display = "inline-block";
                    reject(error.response.data);
                    return;
                }
            });
    });
}

// Force Update Page when called
function useForceUpdate() {
    const [value, setValue] = useState(0);
    return () => setValue(value => value + 1);
}

function ListPage() {
    const [quests, setQuests] = useState([])
    const [tasks, setTasks] = useState([])

    const { list_id } = useParams();

    const forceUpdate = useForceUpdate();
    const [list, setList] = useState({});
    const [redirect, setRedirect] = useState(<></>);

    useEffect(() => {
        QuestList(list_id)
        .then(list => {
            setList(list);
        })
        .catch(_ => {
            // return setRedirect(<Redirect to="/canvas"/>);
        });
    }, [list_id]);
    // readLists().then(setLists);

    const listView = (
        <TaskList
            name={list.title}
            id={list.id}
            key={list.key}
            tasks={list.body}
            singleView={true}
            editList={editQuest}
            deleteList={deleteQuest}
        />
    );

    // needs input to pass props into the accordian
    const dashView = (
        <Dashboard
            name={""}
            date={""}
            description={""}
            urgency={""}
        />
    );    

    function editQuest(id, title, body) {
        const config = {
            method: "post",
            url: path.updateQuest, 
            headers: {Authorization: `Bearer ${token}`},
            data: {
                token: localStorage.getItem("token"),
                id: id,
                title: title,
                list: body
            }
        };

        axios.post(path.editQuest, obj, config)
        .catch(error => console.error('Error: ', error));
    }

    function deleteQuest() {
        const config = {
            method: "post",
            url: path.deleteQuest,
            headers: {Authorization: `Bearer ${token}`},
            id: list_id
        };

       axios.post(path.deleteQuest, obj, config)
       .catch(error => console.error('Error: ', error));
    }

    function addQuest(title) {
        
        const obj = {
            title: title,
            list: [],
            token: localStorage.getItem("token")
        };
        
        const config = {
            method: "post",
            url: path.createQuest,
            headers: {Authorization: `Bearer ${token}`},
        };

        axios.post(path.createQuest, obj, config)
        .catch(error => console.error('Error: ', error));
    }

    return (
        // <View style={styles.wrap }>

        <View id="canvas"
         className="app"  style={{ backgroundImage: `url(${bg})`, height:"100%", width:"100%" }}>
            <View style={styles.menuWrap}>
            <Container className="cardContainer singleContainer" >
                <Text>Welcome to your Quest Dashboard, Hero!</Text>
                {listView}
                {redirect}
            </Container>
            {dashView}
            </View>
        </View>
    );
}

// <NewListForm addList={addList}  />

export default ListPage;

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
    alignSelf: "center"
  },
    wrap:{
    align: "center",
    backgroundColor:"#a6dee3",
    alignItems: "center",
    justifyContent: "center",
    flex: "1",
  },

});