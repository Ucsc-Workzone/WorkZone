import KanbanBoard from 'Components/KanbanCoordinator/KanbanBoard';
import ProjectSummary from 'Components/ProjectSummarycoordinator';

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
              
            
                    <div className="todoContainer">
                        <KanbanBoard />
                    </div>
                    
            
                <div className='summaryConatiner'>
                    <ProjectSummary />
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
