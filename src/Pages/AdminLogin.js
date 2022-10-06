import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import * as React from "react";
import { Button, Grid, TextField } from '@mui/material';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useNavigate }
    from 'react-router-dom';
import { useState } from 'react';

function AdminLogin() {

    const style = {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',

    };

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });




    const [Password, setPassword] = useState('');
    const [UserName, setUserName] = useState('');
    const Navigate = useNavigate();




    const btnClick = () => {


        if ((UserName != "") && (Password != "")) {

            //-------------------

            //  Send Username and Password to backend here

            //-------------------

            Navigate('/CurrentSurveys');
        } else {
            if ((UserName == "") && (Password == "")) {
                window.alert("Please feel in the 'username' and 'password' field");
            } else if (UserName == "") {
                window.alert("Please feel in the 'username' field");
            } else {
                window.alert("Please feel in the 'password' field");
            }
        }
    }



    return (
        <div className="CodeGeneration">
            <header className="CodeGeneration-header">
                <Box alignContent={"center"} display={"flex"} justifyContent={"center"} marginTop={10}>
                    <h1>
                        Welcome HIHO administrator, please sign in below.
                    </h1>
                </Box>


                <Box marginTop={5} display={"flex"} justifyContent={"center"} alignContent={"center"}>
                    <TextField id={"txtName"} placeholder={"username"} autoFocus={true} required={true} onChange={e => setUserName(e.target.value)}
                        helperText={"Required *"}>

                    </TextField>
                </Box>

                <Box marginTop={5} display={"flex"} justifyContent={"center"} alignContent={"center"}>
                    <TextField id={"txtEmail"} placeholder={"password"} required={true} helperText={"Required *"} type={values.showPassword ? 'text' : 'password'} onChange={e => setPassword(e.target.value)}>

                    </TextField>
                </Box>

                <Box display={"flex"} alignContent={"center"} justifyContent={"center"} marginTop={10}>
                    <Button id={"btnLogin"} onClick={() => btnClick()}>
                        Start Quiz Now!
                    </Button>
                </Box>
            </header>
        </div>
    );
}

export default AdminLogin;
