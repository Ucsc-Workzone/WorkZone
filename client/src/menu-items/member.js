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

// ==============================|| Mmebr PAGES MENU ITEMS ||============================== //

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
            url: '/member/home',
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
        {
            id: 'memberProfile',
            title: 'Profile',
            type: 'item',
            url: '/member/profile',
            icon: icons.IconUser,
            breadcrumbs: false
        },
        {
            id: 'memberProjects',
            title: 'Projects',
            type: 'item',
            url: '/member/projects',
            icon: icons.IconDeviceLaptop,
            breadcrumbs: false
        },
        {
            id: 'todo',
            title: 'Todo',
            type: 'item',
            url: '/member/todo',
            icon: icons.IconDeviceLaptop,
            breadcrumbs: false
        },
       
    ]
};

export default pagesMember;
