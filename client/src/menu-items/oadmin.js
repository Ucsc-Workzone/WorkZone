// assets
import { IconHome, IconAccessibleOff, IconUser, IconDeviceLaptop, IconLayoutDashboard,IconUserPlus,IconBellRinging2 } from '@tabler/icons';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';

// constant
const icons = {
    IconHome,
    IconAccessibleOff,
    IconUser,
    IconDeviceLaptop,
    IconLayoutDashboard
};

// ==============================|| Organization Admin PAGES MENU ITEMS ||============================== //

const pagesOrgAdmin = {
    id: 'orgadmin',
    title: 'General',
    type: 'group',

    children: [
        
        {
            id: 'orgadminHome',
            title: 'Dashboard',
            type: 'item',
            url: '/orgadmin/dashboard',
            icon: icons.IconLayoutDashboard,
            breadcrumbs: false
        },
        // {
        //     id: 'leaveconfig',
        //     title: 'Leave Configuration',
        //     type: 'item',
        //     url: '/orgadmin/leaveconfig',
        //     icon: icons.IconAccessibleOff,
        //     breadcrumbs: false
        // },    
        {
            id: 'orgmanageuser',
            title: 'Manage User',
            type: 'item',
            url: '/orgadmin/manageuser',
            icon: icons.IconUser,
            breadcrumbs: false
        },
        // {
        //     id: 'orgmemberfeedback',
        //     title: 'System Feedbacks',
        //     type: 'item',
        //     url: '/orgadmin/feedbacks',
        //     icon: FeedbackOutlinedIcon,
        //     breadcrumbs: false
        // },
        // {
        //     id: 'orgadminnot',
        //     title: 'Annoucements',
        //     type: 'item',
        //     url: '/orgadmin/annoucements',
        //     icon: IconBellRinging2,
        //     breadcrumbs: false
        // },
        {
            id: 'orgadminnot',
            title: 'Register Users',
            type: 'item',
            url: '/orgadmin/register',
            icon: IconUserPlus,
            breadcrumbs: false
        },
       
    ]
};

export default pagesOrgAdmin;


