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


function QuestList(id) {
    return new Promise((resolve, reject) => {

        const obj = {
            token: localStorage.getItem("token")
        };

        const config = {
            method: "post",
            url: path.listQuest,
            headers: {
                "Content-Type": "application/json"
            },
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
    
    const { list_id } = useParams();

    const forceUpdate = useForceUpdate();
    const [list, setList] = useState({});
    const [redirect, setRedirect] = useState(<></>);

    useEffect(() => {
        QuestList(list_id)
        .then(list => {
            if (!list)
                setRedirect(<Redirect to="/canvas"/>);
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
            editList={editList}
            deleteList={deleteList}
        />
    );

    

    function editList(id, title, body) {
        const config = {
            method: "post",
            url: path.updateQuest, // fix all 
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                token: localStorage.getItem("token"),
                id: id,
                title: title,
                list: body
            }
        };

        axios(config)
            .then(function (response) {
                const res = response.data;
                if (res.error) {
                    // setMessage('Error adding list');
                    // addRes.current.style.display = "inline-block";
                    console.error(res.error);
                    return;
                }
                list.title = title;
                list.body = body;
                setList(list);
                forceUpdate();

                })
            .catch(function (error) {
                if (error.response) {
                    // setMessage(error.response.data?.error);
                    // .current.style.display = "inline-block";
                    console.error(error.response);
                }
            });
    }

    function deleteList() {
        const config = {
            method: "post",
            url: path.deleteQuest,
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                token: localStorage.getItem("token"),
                id: list_id
            }
        };

        axios(config)
            .then(function (response) {
                const res = response.data;
                if (res.error) {
                    // setMessage('Error adding list');
                    // addRes.current.style.display = "inline-block";
                    console.error(res.error);
                    return;
                }

                setRedirect(<Redirect to="/canvas"/>);
            })
            .catch(function (error) {
                if (error.response) {
                    // setMessage(error.response.data?.error);
                    // .current.style.display = "inline-block";
                    console.error(error.response);
                }
            });
    }

    function addList(title) {
        const obj = {
            title: title,
            list: [],
            token: localStorage.getItem("token")
        };

        const config = {
            method: "post",
            url: path.createQuest,
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(obj)
        };

        axios(config)
            .then(function (response) {
                const res = response.data;
                if (res.error) {
                    // setMessage('Error adding list');
                    // addRes.current.style.display = "inline-block";
                    console.error(res.error);
                }

                else {
                    const listCard = {
                        title: title,
                        id: res.id,
                        body: []
                    };

                    setShowForm(!showForm);
                    return setLists([...lists, listCard]);
                }
            })
            .catch(function (error) {
                if (error.response) {
                    // setMessage(error.response.data?.error);
                    // .current.style.display = "inline-block";
                    console.error(error.response);
                }
            });
    }
    

    return (
        // <View style={styles.wrap }>

        <View id="canvas"
         className="app"  style={{ backgroundImage: `url(${bg})`, height:"100%", width:"100%" }}>
            <View style={styles.menuWrap}>
            <Container className="cardContainer singleContainer" >
                {listView}
                {redirect}
            </Container>
            <NewListForm addList={addList} />
            </View>
        </View>
    );
}

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