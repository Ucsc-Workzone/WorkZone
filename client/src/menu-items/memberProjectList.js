// assets
import { IconCircle, IconAccessibleOff, IconUser, IconDeviceLaptop, IconLayoutDashboard } from '@tabler/icons';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';

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

const ProjectListMember = {
    id: 'member',
    title: 'Project Assign',
    type: 'group',

    children: [
        
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
        
    
       
    ]
};

export default ProjectListMember;
