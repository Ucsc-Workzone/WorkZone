
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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


const UpcomingList = () => {
    return ( 
    
        <div className="upcomings">
             <Box style={{display: 'flex', justifyContent: 'right'}}>
                <Button variant="contained"><Typography className="seeall" >Other Projects</Typography></Button>
            </Box>
<<<<<<< HEAD
            <Box>
              <Box style={{display:"flex", justifyContent: 'left', width:'60%', paddingLeft:'10px'}}>
                <stack >
                <Typography variant="h3" component="p" fontSize="1.5vw" paddingTop={"15px"} paddingBottom={"15px"}>Mobile App</Typography>
                <Typography variant="p" component="p" fontSize="1.0vw"paddingBottom={"6px"}>4 Days Remaining</Typography>
                <Typography variant="h4" component="p"  fontSize="1.2vw" paddingBottom={"10px"}>Due Date:27/03/2022</Typography>
                </stack>
              </Box>
              <Box style={{display:"flex", justifyContent: 'right', width:'40%'}}>
                
=======

            <Box className="tag-container">
              <Card variant="outlined" className="project-card">
              <Box style={{display:"flex", width:'100%'}}>
                <Box style={{display:"flex", justifyContent: 'left', width:'5%',backgroundColor:'rgb(5 161 189)'}}>
                  
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
>>>>>>> ba7068b973084811839542c6e429a372cbd31afc
              </Box>
              
              </Card>
            </Box>

        </div>
     );
}
 
export default UpcomingList;