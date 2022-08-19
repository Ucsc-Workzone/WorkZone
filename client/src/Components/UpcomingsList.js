
import { useState } from "react";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DoughtChart from 'Components/DoughtChart';

function createData(name, date) {
  return { name, date };
}


const rows = [
  createData('Malithi Perera', '27/08/2022'),
  createData('Malithi Perera', '27/08/2022'),
  createData('Malithi Perera', '27/08/2022')
];

const projects ={
  id:1,
  name:"Mobile App",
  pending:"4 Days",
  date:"27/03/2022"
}
import './styles/upcoming.css';
import { Typography } from '@mui/material';

const UpcomingList = () => {

  const [userData, setUserData] = useState({
    // labels: ["CM", "NC"],
    datasets: [
      {
        label: "Users Gained",
        data: [85, 15],
        backgroundColor: [
          "#0f65fa",
          "#c2c6d1",
        ],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  });

    return ( 
    
        <div className="upcomings">
             <Box style={{display: 'flex', justifyContent: 'right'}}>
                <Box ><Button variant="contained" ><Typography className="seeall" >Other Projects</Typography></Button></Box>
            </Box>
            <Box style={{display:"flex", width:'100%'}}>
              <Box style={{display:"flex", justifyContent: 'left', width:'60%', paddingLeft:'40px', paddingTop:"40px", paddingBottom:"20px"}}>
                <stack >
                <Typography variant="h3" component="p" fontSize="2vw" paddingTop={"15px"} paddingBottom={"15px"}>{projects.name}</Typography>
                <Typography variant="p" component="p" fontSize="1.3vw" paddingBottom={"6px"} colour="yellow">{projects.pending} Remaining</Typography>
                <Typography variant="h4" component="p"  fontSize="1.5vw" paddingBottom={"15px"}>Due Date:{projects.date}</Typography>
                </stack>
              </Box>
              <Box style={{display:"flex", justifyContent: 'center', width:'60%', top: "50%"}}>
                <div style={{ width: "45%"}}>
                  <DoughtChart chartData={userData} percentage={"80"}/>
                </div>             
              </Box>
            </Box>

        </div>
     );
}
 
export default UpcomingList;