import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import {ImageBackground, View, StyleSheet, TextInput, Text} from 'react-native';
import axios from 'axios';
import bg from './../assets/background.png'
import Task from './Task';
import FilterButtons from './FilterButtons';
import NewTaskForm from './NewTaskForm';
import ButtonIcons from './ButtonIcons';
import DeleteConfirmation from './DeleteConfirmation';
import path from './Path.js'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


    function NotDash(props) {

      /*  var obj = {name:"To the Store",date:"12/14/21",description:"I need to get milk",urgency:"High"} dummy */
      var obj = {name : props.name, date: props.date, description: props.date, urgency: props.urgency};
    
        return(

    <View>
        <Accordion>
         <AccordionSummary style = { {backgroundColor: "#BCA3AC", width: 750}}>
          <Text style = {styles.questTitle}>{obj.name}</Text>
          <Text> Due Date - {obj.date} </Text>
        </AccordionSummary>
        <AccordionDetails>
          <Text>
            {obj.description}
          </Text>
          <Text>
            {obj.urgency}
          </Text>
        
        <Button> Edit </Button>
        <Button> Delete </Button>

        </AccordionDetails>
      </Accordion>
    </View>

        );
      
      }
      
      export default NotDash;

      const styles = StyleSheet.create({

        questTitle: {
            fontFamily: "Garamond, serif",
            alignItems: "center",
            justifyContent: "center",
          },


      });