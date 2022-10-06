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
import {Button, Grid, Icon, TextField} from '@mui/material';



function Results(props) {

  const { Answers } = props;

  let iLeaderShip = (parseInt(Answers[0]) + parseInt(Answers[1]) + parseInt(Answers[2]) + parseInt(Answers[3]) + parseInt(Answers[4]) + parseInt(Answers[5])) / 6;
  let iPeople = ((Answers[6]) + (Answers[7]) + (Answers[8]) + (Answers[9]) + (Answers[10]) + (Answers[11])) / 6;
  let iMoney = ((Answers[12]) + (Answers[13]) + (Answers[14]) + (Answers[15]) + (Answers[16]) + (Answers[17])) / 6;
  let iStrategy = ((Answers[18]) + (Answers[19]) + (Answers[20]) + (Answers[21]) + (Answers[22]) + (Answers[23])) / 6;
  let iExecution = ((Answers[24]) + (Answers[25]) + (Answers[26]) + (Answers[27]) + (Answers[28]) + (Answers[29])) / 6;


  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

  const data = {
    labels: ['Leadership ' + iLeaderShip, 'People '+iPeople, 'Money '+ iMoney, 'Strategy '+ iStrategy, 'Execution '+ iExecution],
    
  

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

  ChartJS.overrides["polarArea"].plugins.legend.position= 'right';
  ChartJS.overrides["polarArea"].plugins.legend.labels.padding= 50;
  ChartJS.overrides["polarArea"].plugins.tooltip.enabled = false;

  //ChartJS.overrides["polarArea"].options.scales["r"].ticks= 100;



const pdfGenerate=()=>{

const doc = new jsPDF();

//doc.addChart(ChartJS);


doc.text("Your results:", 10, 10);

const canvas = document.getElementById("PolarChart");

canvas.fillStyle = "green";

const canvasImage = canvas.toDataURL('image/png',0.5);

doc.addImage(canvasImage,'PNG',15,15, 185,185);

doc.save("OrganizationalHealthResults.pdf");

}


  return (

    <header className="CodeGeneration-header">
       <Box  marginTop={5} display={"flex"}
      justifyContent={"center"} alignContent={"center"}>
    <h1>
Your Results:
    </h1>
    </Box>
    <Box  display={"flex"}
      justifyContent={"center"} alignContent={"center"}>
         
      <Box width={800}   display={"flex"}
        justifyContent={"center"} alignContent={"center"}>
         
        <PolarArea data={data} id={"PolarChart"}/>
      </Box>
    </Box>

    <Button
    onClick={pdfGenerate}
    >
    Download Results
    </Button>
    </header>
  );
}

export default Results;