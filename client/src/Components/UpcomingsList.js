
import { useState } from "react";
import { Typography, Stack } from '@mui/material';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
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

            <Box className="tag-container">
              <Card variant="outlined" className="project-card">
              <Box style={{display:"flex", width:'100%'}}>
                <Box style={{display:"flex", justifyContent: 'left', width:'5%',backgroundColor:'#5e35b1'}}>
                  
                </Box>
                <Box style={{display:"flex", justifyContent: 'left', width:'70%', paddingLeft:'70px'}}>
                  <Stack >
                  <Typography variant="h3" component="p" fontSize="1.5vw" paddingTop={"15px"} paddingBottom={"15px"}>{projects.name}</Typography>
                  <Typography variant="p" component="p" fontSize="0.8vw" paddingBottom={"6px"}>{projects.pending} Remaining</Typography>
                  <Typography variant="h4" component="p"  fontSize="1.0vw" paddingBottom={"15px"}>Due Date:{projects.date}</Typography>
                  </Stack>
                </Box>
                <Box style={{display:"flex", justifyContent: 'left', width:'60%', top: "50%"}}>
                  <div style={{ width: "38%"}}>
                    <DoughtChart chartData={userData} percentage={"85"}/>
                  </div>             
                </Box>
              </Box>
              
              </Card>
            </Box>

        </div>
     );
}
 
export default UpcomingList;