// assets
import { IconHome, IconAccessibleOff, IconUser, IconDeviceLaptop, IconLayoutDashboard } from '@tabler/icons';

// constant
const icons = {
    IconHome,
    IconAccessibleOff,
    IconUser,
    IconDeviceLaptop,
    IconLayoutDashboard
};

// ==============================|| Member PAGES MENU ITEMS ||============================== //

const pagesMember = {
    id: 'member',
    title: 'General',
    type: 'group',

    children: [
        {
            id: 'mainhome',
            title: 'Home',
            type: 'item',
            url: '/',
            icon: icons.IconHome,
            breadcrumbs: false
        },
        {
            id: 'memberHome',
            title: 'Dashborad',
            type: 'item',
            url: '/member/dashboard',
            icon: icons.IconLayoutDashboard,
            breadcrumbs: false
        },
        {
            id: 'memberLeave',
            title: 'Leave',
            type: 'item',
            url: '/member/leave',
            icon: icons.IconAccessibleOff,
            breadcrumbs: false
        },
<<<<<<< HEAD
        {
            id: 'memberProfile',
            title: 'Profile',
            type: 'item',
            url: '/member/profile',
            icon: icons.IconUser,
            breadcrumbs: false
        },
=======
       
        
>>>>>>> ba7068b973084811839542c6e429a372cbd31afc
        {
            id: 'workreports',
            title: 'Work Reports',
            type: 'item',
            url: '/member/workreports',
            icon: icons.IconDeviceLaptop,
            breadcrumbs: false
        },
<<<<<<< HEAD
=======
        {
            id: 'memberfeedback',
            title: 'System Feedbacks',
            type: 'item',
            url: '/member/feedbacks',
            icon: FeedbackOutlinedIcon,
            breadcrumbs: false
        },
>>>>>>> ba7068b973084811839542c6e429a372cbd31afc
       
    ]
};

export default pagesMember;
