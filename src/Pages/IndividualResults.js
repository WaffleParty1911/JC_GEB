import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
    Scale,
    Ticks,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import Box from '@mui/material/Box';
import { maxHeight } from '@mui/system';
import jsPDF from "jspdf";
import { Button, Grid, Icon, TextField } from '@mui/material';



function IndividualResults() {

    let iLeaderShip = 56;
    let iPeople = 54;
    let iMoney = 76;
    let iStrategy = 44;
    let iExecution = 55;


    ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

    const data = {
        labels: ['Leadership ' + iLeaderShip, 'People ' + iPeople, 'Money ' + iMoney, 'Strategy ' + iStrategy, 'Execution ' + iExecution],



        datasets: [
            {
                label: '# of Votes',

                data: [iLeaderShip, iPeople, iMoney, iStrategy, iExecution],
                backgroundColor: [
                    'rgba(75, 192, 255, 0.5)',//blue
                    'rgba(0, 255, 0, 0.5)',  //Green
                    'rgba(253, 151, 0, 0.5)',//orange
                    'rgba(247, 223, 30, 0.5)', //Yellow 247, 30, 223
                    'rgba(153, 102, 255, 0.5)',//purple
                ],
                borderWidth: 0,

            },
        ],
    };

    ChartJS.overrides["polarArea"].plugins.legend.position = 'right';
    ChartJS.overrides["polarArea"].plugins.legend.labels.padding = 50;
    ChartJS.overrides["polarArea"].plugins.tooltip.enabled = false;
    return (

        <header className="CodeGeneration-header">
            <Box marginTop={5} display={"flex"}
                justifyContent={"center"} alignContent={"center"}>
                <h1>
                    Your Results:
                </h1>
            </Box>
            <Box display={"flex"}
                justifyContent={"center"} alignContent={"center"}>

                <Box width={800} display={"flex"}
                    justifyContent={"center"} alignContent={"center"}>

                    <PolarArea data={data} id={"PolarChart"} />
                </Box>
            </Box>
        </header>
    );
}

export default IndividualResults;