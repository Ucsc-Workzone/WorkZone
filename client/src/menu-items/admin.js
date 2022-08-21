// assets
import { IconHome, IconAccessibleOff, IconUser, IconDeviceLaptop, IconLayoutDashboard } from '@tabler/icons';
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
       
        
        // {
        //     id: 'workreports',
        //     title: 'Work Reports',
        //     type: 'item',
        //     url: '/member/workreports',
        //     icon: icons.IconDeviceLaptop,
        //     breadcrumbs: false
        // },
        {
            id: 'memberfeedback',
            title: 'System Feedbacks',
            type: 'item',
            url: '/admin/feedbacks',
            icon: FeedbackOutlinedIcon,
            breadcrumbs: false
        },
       
        {
            id: 'adminreg',
            title: 'Register',
            type: 'item',
            url: '/admin/register',
            icon: FeedbackOutlinedIcon,
            breadcrumbs: false
        },
       
    ]
};

export default pagesAdmin;
