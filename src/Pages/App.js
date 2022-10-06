import './App.css';
import {BrowserRouter, Routes, Route}
    from 'react-router-dom';
    import {useState} from "react";
import InputCode from './InputCode';
import Survey from "./Survey";
import CodeGeneration from "./CodeGeneration";
import Results from "./Results";
import HomePage from "./HomePage";
import AdminLogin from "./AdminLogin";
import CurrentSurveys from "./CurrentSurveys";
import Chart from "./Chart";
import React from 'react';
import Summaries from './Summaries';
import IndividualResults from './IndividualResults';


const arrAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];



function App() {

    const[Answers, setAnswers] = useState(arrAnswers);

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/JC_GEB/"} element={<HomePage/>}/>

                <Route path="/SignUp" element={<InputCode/>}/>

                <Route path="/Survey" element={<Survey Answers = {Answers} setAnswers={setAnswers} />}/>

                <Route path="/CodeGeneration" element={<CodeGeneration/>}/>

                <Route path="/Results" element={<Results Answers = {Answers} />}/>

                <Route path="/AdminLogin" element={<AdminLogin/>}/>

                <Route path="/CurrentSurveys" element={<CurrentSurveys/>}/>

                <Route path="/Chart" element={<Chart/>}/>

                <Route path="/Summaries" element={<Summaries/>}/>

                <Route path="/IndividualResults" element={<IndividualResults/>}/>


            </Routes>
        </BrowserRouter>
    );
}

export default App;
