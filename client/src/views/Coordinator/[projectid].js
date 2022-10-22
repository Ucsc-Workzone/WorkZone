import KanbanBoard from 'Components/KanbanCoordinator/KanbanBoard';
import ProjectSummary from 'Components/ProjectSummary';

import './styles/project_create.css';
import Chip from '@mui/material/Chip';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import { IconTrash} from '@tabler/icons';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const ProjectPage = () => {
    const [list, memberList] = useState([]);
    const [state,setState]=useState(false);
    const {projectid}=useParams();
    const handleClick = () => {
        console.log(list.length);
        const mem = document.getElementById('filter-demo').value;
        memberList((list) => [...list, mem]);
        console.log(list);
        setState(true);
    };
    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        stringify: (option) => option.title
    });
    useEffect(()=>{
        // const {projectid}=useParams();
         console.log(projectid)
    })

    return (
        <>
            <div className="projectmain">
                <div>
                    <ProjectSummary />
                </div>
                <div className="loweCon">
                    <div className="todoContainer">
                        <KanbanBoard />
                    </div>
                    <div className="memberAssignSerach">
                        <div className="memberAssign">
                            <div> <Autocomplete
                                id="filter-demo"
                                options={top100Films}
                                getOptionLabel={(option) => option.title}
                                filterOptions={filterOptions}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Custom filter" id="filter-demo-d" />}
                            /></div>
                            <div>
                            <Button onClick={handleClick} className='addBut'>Add</Button>
                            </div>
                           
                            
                        </div>
                        <div className="listsort">
                            {state && (
                                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} className='list'>
                                    {list.map((value) => {                                   
                                        return(
                                            <ListItem
                                            key={value}
                                            disableGutters
                                            secondaryAction={
                                                <IconButton aria-label="comment">
                                                   <IconTrash></IconTrash>
                                                </IconButton>
                                            }
                                        >
                                            <ListItemText primary={` ${value}`} />
                                        </ListItem>
                                        );
                                       
                                 })}
                                </List>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'Eshan Herath', year: 1994 },
    { title: 'Thara Sayuru', year: 1972 },
    { title: 'Ravin Jayarathne', year: 1974 },
    { title: 'Ravin Eranga', year: 2008 },
    { title: 'Werath Ravin', year: 1957 },
    { title: "Wihan Bandara", year: 1993 },
    { title: 'Ravin Gamage', year: 1994 },
    
   
   
 
  
 
 
    
];

export default ProjectPage;
