import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, useNavigate }
    from 'react-router-dom';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import * as React from "react";
import { Button, Grid, TextField } from '@mui/material';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


function InputCode() {

    const style = {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',

    };

    const [Email, setEmail] = useState('');
    const [Name, setName] = useState('');
    const Navigate = useNavigate();




    const btnClick = () => {
        console.log(Name);
        console.log(Email);

        if ((Name != "") && (Email != "")) {

            //-------------------

            //  Send Name and Email to backend here

            //-------------------



            Navigate('/Survey');
        } else {
            if ((Name == "") &&(Email == "")) {
                window.alert("Please feel in the 'name' and 'email' field");
            } else if (Name =="") {
                window.alert("Please feel in the 'name' field");
            } else {
                window.alert("Please feel in the 'email' field");
            }
        }
    }

    //             window.location = ("http://localhost:3000/Survey");

    return (
        <div className="CodeGeneration">
            <header className="CodeGeneration-header">
                <Box alignContent={"center"} display={"flex"} justifyContent={"center"}>
                    <h1>
                        Welcome to the HIHO Organizational health survey
                    </h1>
                </Box>
                <Box alignContent={"center"} display={"flex"} justifyContent={"center"} marginTop={5}>
                    <List sx={{ style, justifySelf: "center" }} component="nav" aria-label="mailbox folders">

                        <ListItemText primary="Please take note of a few things:" />

                        <Divider light />


                        <ListItemText primary="- These surveys are anonymous." />


                        <ListItemText
                            primary="- We do require a name and email, however this is for our own internal use." />

                    </List>
                </Box>

                <Box marginTop={5} display={"flex"} justifyContent={"center"} alignContent={"center"}>
                    <TextField id={"txtName"} placeholder={"name"} autoFocus={true} required={true} helperText={"Required *"} onChange={e => setName(e.target.value)}>
                        Insert Code Here
                    </TextField>
                </Box>

                <Box marginTop={5} display={"flex"} justifyContent={"center"} alignContent={"center"}>
                    <TextField id={"txtEmail"} placeholder={"email"} required={true} helperText={"Required *"} onChange={e => setEmail(e.target.value)}>
                        Insert Code Here
                    </TextField>
                </Box>

                <Box display={"flex"} alignContent={"center"} justifyContent={"center"} marginTop={10}>
                    <Button id={"btnCheckCode"} onClick={() => btnClick()}>
                        Start Quiz Now!
                    </Button>
                </Box>
            </header>
        </div>
    );
}

export default InputCode;
