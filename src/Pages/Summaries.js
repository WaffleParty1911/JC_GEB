import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Box from '@mui/material/Box';


function Summaries() {

    let CompanyName = "Company Name Here";

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: "Company History",
            },

        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Leadership',
                data: [34, 44, 43, 56, 61, 63, 63],
                borderColor: 'rgba(75, 192, 255, 0.5)',//blue

                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'People',
                data: [23, 24, 35, 46, 39, 42, 44],
                borderColor: 'rgba(0, 255, 0, 0.5)',  //Green

                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Money',
                data: [44, 45, 55, 61, 61, 58, 61],
                borderColor: 'rgba(253, 151, 0, 0.5)',//orange
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Strategy',
                data: [67, 69, 88, 81, 87, 88, 76],
                borderColor: 'rgba(247, 223, 30, 0.5)', //Yellow 247, 30, 223
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Execution',
                data: [35, 46, 56, 76, 78, 79, 82],
                borderColor: 'rgba(153, 102, 255, 0.5)',//purple
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };



    return (



        <header>
            <Box alignContent={"center"} display={"flex"} justifyContent={"center"} marginTop={5}>

                <h1>
                    {CompanyName}
                </h1>
            </Box>

            <Box alignContent={"center"} display={"flex"} justifyContent={"center"} marginTop={5}>

                <Box sx={{ width: 1500 }}>

                    <Line options={options} data={data} />
                </Box>
            </Box>
        </header>
    );
}

export default Summaries;

