// assets
import { IconHome, IconAccessibleOff, IconUser, IconDeviceLaptop, IconLayoutDashboard,IconUserPlus,IconBellRinging2, IconTool } from '@tabler/icons';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';

// constant
const icons = {
    IconHome,
    IconAccessibleOff,
    IconUser,
    IconDeviceLaptop,
    IconLayoutDashboard,
    IconTool
};

// ==============================|| System Admin PAGES MENU ITEMS ||============================== //

const pagesSysAdmin = {
    id: 'sysadmin',
    title: 'General',
    type: 'group',

    children: [
        
        {
            id: 'sysadminHome',
            title: 'Dashboard',
            type: 'item',
            url: '/sysadmin/dashboard',
            icon: icons.IconLayoutDashboard,
            breadcrumbs: false
        },
        {
            id: 'sysmemberfeedback',
            title: 'System Feedbacks',
            type: 'item',
            url: '/sysadmin/feedbacks',
            icon: FeedbackOutlinedIcon,
            breadcrumbs: false
        },
        // {
        //     id: 'sysadminnot',
        //     title: 'Annoucements',
        //     type: 'item',
        //     url: '/sysadmin/annoucements',
        //     icon: IconBellRinging2,
        //     breadcrumbs: false
        // },
        {
            id: 'sysadminreg',
            title: 'Registration',
            type: 'item',
            url: '/sysadmin/register',
            icon: CorporateFareOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'ManageOrg',
            title: 'Manage Divisions',
            type: 'item',
            url: '/sysadmin/manageorganizaton',
            icon: icons.IconTool,
            breadcrumbs: false
        },
        {
            id: 'leaveconfig',
            title: 'Leave Configuration',
            type: 'item',
            url: '/sysadmin/leaveconfig',
            icon: icons.IconAccessibleOff,
            breadcrumbs: false
        },   
        
       
    ]
};

export default pagesSysAdmin;


