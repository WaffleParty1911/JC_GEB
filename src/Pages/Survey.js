import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

let arrQuestions = ["Your boss listens to your opinions.",
    "Your boss empathizes with obstacles in your work.",
    "Your boss shows respect to those around themself.",
    "Your boss provides a positive influence on the work place.",
    "Your boss expresses gratitude to a job well done or extra effort made.",
    "Your boss communicates clearly what they expect from you.",
    "Those around you create a comfortable working environment.",
    "You feel comfortable asking a peer for assistance.",
    "You feel safe at work.",
    "You have access to resources to report problems you experience.",
    "You have a good relationship with those that you work with.",
    "You work seamlessly with your peers on projects.",
    "You feel resources are distributed fairly throughout the company.",
    "You feel you are paid a fair salary/wage.",
    "You feel your bonuses are fair.",
    "You feel your work environment is regularly maintained.",
    "Replacing outdated or broken equipment is an easy process.",
    "Your company provides sufficient equipment or stationary for your job.",
    "The strategies your company employs are in line with the business objectives.",
    "The strategies your company employs takes the employees preference into account.",
    "The strategies your company employs take the current work place situation into account.",
    "The strategies your company employs make use of the correct tools and personnel.",
    "The strategies your company employs are well documented.",
    "The strategies your company employs are clearly explained.",
    "Executed tasks reflect attention to detail.",
    "Currently executing tasks are well communicated between team members and departments.",
    "Executed tasks make use of seamless collaboration.",
    "Executing tasks make use of regular problem solving.",
    "Executing tasks are delegated to more capable members when required.",
    "Executed tasks align with the company objectives and help move the company in this direction."];

let i = 0;

let iLeaderShip = 0;
let iPeople = 0;
let iMoney = 0;
let iStrategy = 0;
let iExecution = 0;


let border = "hidden";

function Survey(props) {
    const { Answers, setAnswers } = props;
    const Navigate = useNavigate();
    const [CurrentQuestion, setQuestion] = useState(0);





    return (


        <div className="Survey">
            <header className="Survey-header">
                <Box
                    marginTop={10}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    border={border}
                    height={100}
                >
                    <div
                    >
                        Please place the slider between "Weak" and "Strong" based on how much you agree with each
                        statement.
                    </div>


                </Box>

                <Box
                    id={"bxQuestionNumber"}
                    marginTop={10}
                    display={"flex"}
                    justifyContent={"center"}
                    fontSize={"larger"}
                    fontFamily={"-moz-initial"}
                    border={border}


                >
                    Question {CurrentQuestion + 1} of {arrQuestions.length}

                </Box>

                <Box
                    border={border}

                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    height={100}
                >
                    <div
                        id={"divQuestion"}
                    >
                        {arrQuestions[CurrentQuestion]}
                    </div>
                </Box>
                <Box
                    border={border}

                    marginTop={0}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    height={100}
                >
                    <Box
                        border={border}

                        marginRight={2}
                    >Weak</Box>
                    <Box
                        justifyContent={"center"}
                        marginTop={2}
                        width={300}
                        alignItems={"center"}
                        border={border}

                    >
                        <Slider
                            id={"slSlider"}
                            size={"medium"}
                            max={100}
                            min={0}
                            
                            step={1}
                            value={Answers[CurrentQuestion]}
                            onChange={event => {
                                const { value } = event.target;
                                const newAnswers = [...Answers];
                                newAnswers[CurrentQuestion] = value;
                                setAnswers(newAnswers);
                            }}
                            valueLabelDisplay={"auto"}
                            sx={{ mb: 1 }}


                        />

                    </Box>
                    <Box
                        marginLeft={2}
                        border={border}

                    >Strong</Box>
                </Box>


                <Box
                    
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    border={border}
                >

                    <Box
                       
                       >
                       


                        <Button
                            id={"btnPrev"}
                            size={"large"}
                            disabled={CurrentQuestion == 0}
                            onClick={() => setQuestion(CurrentQuestion - 1)}
                            variant={"outlined"}
                        >
                            Previous
                        </Button>
                    </Box>


                    <Box

                      marginLeft={45}
                    >
                        <Button
                            width={70}
                            id={"btnNext"}
                            disabled={CurrentQuestion == 29}
                            onClick={() => setQuestion(CurrentQuestion + 1)}
                            variant={"outlined"}
                            size={"large"}


                        >
                            Next
                        </Button>
                    </Box>


                </Box>
                <Box
                     alignContent={"center"} display={"flex"} justifyContent={"center"} marginTop={5}
     
                    
                >
                    <Button

                        id={"btnSubmit"}
                        onClick={() => Navigate("/Results")}
                        disabled={CurrentQuestion != 29}
                        variant={"outlined"}
                        size={"large"}
                        
                    >Submit
                    </Button>
                </Box>
            </header>
            <script src={"Script.js"} />

        </div>

    );
}

export default Survey;
