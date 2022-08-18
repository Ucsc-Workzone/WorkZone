
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Pie, defaults } from 'react';
import Chart from 'Components/chart';
import { Doughnut } from 'react-chartjs-2';

function createData(name, date) {
  return { name, date };
}

const rows = [
  createData('Malithi Perera', '27/08/2022'),
  createData('Malithi Perera', '27/08/2022'),
  createData('Malithi Perera', '27/08/2022')
];

import './styles/upcoming.css';
import { Typography } from '@mui/material';

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

const UpcomingList = () => {
    return ( 

    
        <div className="upcomings">
             <Box style={{display: 'flex', justifyContent: 'right'}}>
                <Button variant="contained"><Typography className="seeall" >Other Projects</Typography></Button>
            </Box>
            <Box>
              <Box style={{display:"flex", justifyContent: 'left', width:'60%', paddingLeft:'10px'}}>
                <stack >
                <Typography variant="h3" component="p" fontSize="1.5vw" paddingTop={"15px"} paddingBottom={"15px"}>Mobile App</Typography>
                <Typography variant="p" component="p" fontSize="1.0vw"paddingBottom={"6px"}>4 Days Remaining</Typography>
                <Typography variant="h4" component="p"  fontSize="1.2vw" paddingBottom={"10px"}>Due Date:27/03/2022</Typography>
                </stack>

                
              </Box>
              <Box style={{display:"flex", justifyContent: 'right', width:'40%'}}>

              <div>
                <Doughnut data={{
                  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
              
              }} />
                  {/* 
                   */}
              </div>
              
              </Box>
            </Box>

        </div>
     );
}
 
export default UpcomingList;