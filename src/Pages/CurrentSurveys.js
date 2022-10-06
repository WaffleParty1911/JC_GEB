import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";





function createSurveyComp(id, CompanyName, NumberOfSurveys, TimeWithComp) {

  return { id, CompanyName, NumberOfSurveys, TimeWithComp };

}

const CompData = [
  createSurveyComp(0, "Coding Schmoding", "2022/04/13", "14"),
  createSurveyComp(1, "Gloop and Co", "2022/04/13", "25"),
  createSurveyComp(2, "Gloop, Malkovich And Thomas, Associates", "2022/04/13", "76"),
  createSurveyComp(3, "Deliver Deliver Deliver", "2022/04/13", "78"),
  createSurveyComp(4, "Bogtrotter and Co", "2022/04/13", "45"),
  createSurveyComp(5, "Tutoring Schmutoring", "2022/04/13", "4"),
  createSurveyComp(6, "Parker Unlimited", "2022/04/13 ", "45"),
];


function createSurveyIndiv(id, Name, Email, DateOfSurvey) {

  return { id, Name, Email, DateOfSurvey };

}


const IndivData = [
  createSurveyIndiv(0, "Bob", "bob@gmail.com", "2022/04/13"),
  createSurveyIndiv(1, "Mitch", "mitch@outlook.com", "2022/04/13"),
  createSurveyIndiv(2, "Pete", "pete@gmail.co.za", "2022/04/13"),
  createSurveyIndiv(3, "Bill", "bill@outlook.com", "2022/04/13"),
  createSurveyIndiv(4, "Sara", "Sara@gmail.com", "2022/04/13"),
  createSurveyIndiv(5, "Cat", "Cat@gmail.com", "2022/04/13"),
  createSurveyIndiv(6, "Anna", "Anna@outlook.com", "2022/04/13 "),
];




function CurrentSurveys() {

  const [selectedRow, setSelectedRow] = React.useState({});
  const Navigate = useNavigate();
  return (
    <div>


      <Box alignContent={"center"} display={"flex"} justifyContent={"center"} marginTop={5} >
        <Box sx={{ width: 1500 }}>



          <Paper sx={{ width: '100%', height: 400, overflow: 'hidden' }}>

            <TableContainer sx={{ maxHeight: 400 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableCell align="center" sx={{ fontSize: "large" }} >
                    Companies
                  </TableCell>
                  <TableRow>
                    <TableCell sx={{ fontSize: "medium" }} width={500}>Company Name</TableCell>
                    <TableCell sx={{ fontSize: "medium" }} width={500} align="right">Date of last cut off</TableCell>
                    <TableCell sx={{ fontSize: "medium" }} width={500} align="right">Days with JC GEB</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {CompData.map((row) => (
                    <TableRow
                      onClick={() => Navigate("/Summaries")}
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >

                      <TableCell>{row.CompanyName}</TableCell>
                      <TableCell align="right">{row.NumberOfSurveys}</TableCell>
                      <TableCell align="right">{row.TimeWithComp}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>

      </Box>

      <Box alignContent={"center"} display={"flex"} justifyContent={"center"} marginTop={5} >



        <Box sx={{ width: 1500, mt: 5 }}>


          <Paper sx={{ width: '100%', height: 400, overflow: 'hidden' }}>

            <TableContainer sx={{ maxHeight: 400 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableCell sx={{ fontSize: "large" }} align="center" >
                    Individuals
                  </TableCell>
                  <TableRow>
                    <TableCell sx={{ fontSize: "medium" }} width={500} >Name</TableCell>
                    <TableCell sx={{ fontSize: "medium" }} width={500} align="right">Email Address</TableCell>
                    <TableCell sx={{ fontSize: "medium" }} width={500} align="right">Date of Survey</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {IndivData.map((row) => (
                    <TableRow
                      onClick={() => Navigate("/IndividualResults")}
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>{row.Name}</TableCell>
                      <TableCell align="right">{row.Email}</TableCell>
                      <TableCell align="right">{row.DateOfSurvey}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>

      </Box>

    </div>
  );
}
export default CurrentSurveys;