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

// ==============================|| Member PAGES MENU ITEMS ||============================== //

const pagesAdmin = {
    id: 'member',
    title: 'General',
    type: 'group',

    children: [
        
        {
            id: 'adminHome',
            title: 'Dashborad',
            type: 'item',
            url: '/admin/dashboard',
            icon: icons.IconLayoutDashboard,
            breadcrumbs: false
        },
        // {
        //     id: 'memberLeave',
        //     title: 'Leave',
        //     type: 'item',
        //     url: '/member/leave',
        //     icon: icons.IconAccessibleOff,
        //     breadcrumbs: false
        // },
        {
            id: 'adminreg',
            title: 'Register',
            type: 'item',
            url: '/admin/register',
            icon: IconUserPlus,
            breadcrumbs: false
        },
        
        {
            id: 'manageuser',
            title: 'Manage User',
            type: 'item',
            url: '/admin/manageuser',
            icon: icons.IconUser,
            breadcrumbs: false
        },
        {
            id: 'memberfeedback',
            title: 'System Feedbacks',
            type: 'item',
            url: '/admin/feedbacks',
            icon: FeedbackOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'adminnot',
            title: 'Annoucements',
            type: 'item',
            url: '/admin/annoucements',
            icon: IconBellRinging2,
            breadcrumbs: false
        },
       
        
       
    ]
};

export default pagesAdmin;
