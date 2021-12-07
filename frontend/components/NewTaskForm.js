import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { color } from 'react-native-reanimated';
import ButtonIcons from './ButtonIcons';


function NewTaskForm(props)
{
    const [state, setState] = useState(
        {
            name: "",
            date: "",
            description: "",
            urgency: "",
        }
    );

    const show = useRef(null);
    const focus = useRef(null);

    let err = "All fields are required for your Quest, hero!";

    const handleChange = (e) =>
    {
        setState(
            {
                ...state, 
                [e.target.name]: e.target.value,
                [e.target.date]: e.target.value,
                [e.target.description]: e.target.value,
                [e.target.urgency]: e.target.value,

            }
        )
    }

    function handleSubmit(e)
    {
        e.preventDefault();

        if(state.name === "")
        {
            show.current.style.display = "inline-block";
            focus.current.focus();
            return;
        } 
        else 
        {
            show.current.style.display = "none";
        }
        
        if(state.date === ""){
            show.current.style.display = "inline-block";
            focus.current.focus();
            return;
        }
        else 
        {
            show.current.style.display = "none";
        }

        if(state.description === ""){
            show.current.style.display = "inline-block";
            focus.current.focus();
            return;
        }
        else 
        {
            show.current.style.display = "none";
        }

        if(state.urgency === ""){
            show.current.style.display = "inline-block";
            focus.current.focus();
            return;
        }
        else 
        {
            show.current.style.display = "none";
        }


        {
            props.addTask(state.name, state.date, state.description);
        }

        state.name = "";
        state.date = "";
        state.description = "";
    }

    return(
        <Form onSubmit={handleSubmit}>      
            <div onSubmit={handleSubmit}>
                <div id="newTaskForm">
                <input
                    type="text"
                    id="new-todo-input"
                    className="inFields newTask"
                    name="name"
                    autoComplete="off"
                    placeholder="Quest Name"
                    value={state.name}
                    onChange={handleChange}
                    ref={focus}
                />
                <input
                    type="text"
                    id="new-todo-input"
                    className="inFields newTask"
                    name="date"
                    autoComplete="off"
                    placeholder="Due Date"
                    value={state.date}
                    onChange={handleChange}
                    ref={focus}
                />

                <label>
                <select name="urgency" value={state.urgency} onChange={handleChange} style={{borderRadius : 10, fontFamily : 'Times',}}>
                      <option value="Easy">Easy</option>
                      <option value="Medium">Medium</option>
                      <option value="Hard">Hard</option>
                </select>
                </label>

                </div>
                
                <div id="newTaskForm">
                <textarea
                    type="text"
                    id="new-todo-input"
                    className="descBox newTask"
                    name="description"
                    autoComplete="off"
                    placeholder="   Describe your quest!"
                    value={state.description}
                    onChange={handleChange}
                    ref={focus}
                    style={{marginRight : 20, fontSize: 15, textAlign: 'start'}}
                />
                

                <Button type="submit" className="buttonScheme">
                    <ButtonIcons type="Add"/>
                </Button>
                </div>
            </div>
            <span ref={show} className="errorMsg" style={{display: "none", color: "#C92D2D", fontSize: "20px", margin: 'auto',}}>{err}</span>
        </Form>
    );
}

export default NewTaskForm;