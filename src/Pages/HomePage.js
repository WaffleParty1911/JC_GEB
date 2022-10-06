import {Button, Grid, Icon, TextField} from '@mui/material';
import * as React from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";


function HomePage() {

    const Navigate = useNavigate();

    return (
        <div className="CodeGeneration">
            <header className="CodeGeneration-header">


                <Box marginTop={5} display={"flex"} justifyContent={"center"} alignContent={"center"}>

                    <Box height={400} width={200} border={"solid"} marginTop={5} display={"flex"} marginRight={2}
                         justifyContent={"center"} alignContent={"center"}>
                        <Button
                            id={"btnAdmin"}
                            variant={"outlined"}
                            size={"large"}
                            sx={{color: "Blue", height: 400, width: 200}}
                            onClick={() => Navigate("/AdminLogin")}
                        >
                            JC GEB Admin
                        </Button>
                    </Box>
                    <Box height={400} width={200} border={"solid"} marginTop={5} display={"flex"}
                         justifyContent={"center"} alignContent={"center"}>
                        <Button
                            id={"btnSurvey"}
                            variant={"outlined"}
                            size={"large"}
                            sx={{color: "Blue", height: 400, width: 200}}
                            onClick={() => Navigate("/SignUp")}
                        >
                            Individual Survey
                        </Button>
                    </Box>
                </Box>
            </header>
        </div>
    );
}

export default HomePage;
