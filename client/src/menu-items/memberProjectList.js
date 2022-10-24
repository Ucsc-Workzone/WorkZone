// assets
import { IconCircle, IconAccessibleOff, IconUser, IconDeviceLaptop, IconLayoutDashboard } from '@tabler/icons';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import { useEffect } from 'react';
import axios from 'axios';
// constant
const icons = {

    IconAccessibleOff,
    IconUser,
    IconDeviceLaptop,
    IconLayoutDashboard
};

const ProjectsList=[
    [1,'Skelton  Mobile App ',FiberManualRecordOutlinedIcon],
   [2,'UCSC Bit Web App ',FiberManualRecordOutlinedIcon]

]
const array=()=>{
    const userid=localStorage.getItem('userid')
    axios
        .post('http://localhost:5000/api/project/getmemberProjectDetails', {
          
           userid:userid
        })
        .then((response) => {
            console.log(response.data);
            const ProjectsList=response.data;
		console.log(ProjectsList)
        

        });
}
array();
const ProjectListMember = {

   
    id: 'member',
    title: 'Project Assign',
    type: 'group',

    children: [
        // {ProjectsList.map((ProjectsList)={
            {
                id: ProjectsList[0][0],
                title: ProjectsList[0][1],
                type: 'item',
                url: '/member/project/1',
                icon: ProjectsList[0][2],
                breadcrumbs: false
            },
            {
                id: ProjectsList[1][0],
                title: ProjectsList[1][1],
                type: 'item',
                url: '/member/project/2',
                icon: ProjectsList[1][2],
                breadcrumbs: false
            },

        // })};
        
        
        
    
       
    ]
};

export default ProjectListMember;
