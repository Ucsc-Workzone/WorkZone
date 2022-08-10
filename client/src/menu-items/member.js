// assets
import { IconHome, IconAccessibleOff, IconUser, IconDeviceLaptop } from '@tabler/icons';

// constant
const icons = {
    IconHome,
    IconAccessibleOff,
    IconUser,
    IconDeviceLaptop
};

// ==============================|| Mmebr PAGES MENU ITEMS ||============================== //

const pagesMember = {
    id: 'member',
    title: 'General',
    caption: 'General Settings',
    type: 'group',

    children: [
        {
            id: 'memberHome',
            title: 'Home',
            type: 'item',
            url: '/member/home',
            icon: icons.IconHome,
            breadcrumbs: false,
            target: true
        },
        {
            id: 'memberLeave',
            title: 'Leave',
            type: 'item',
            url: '/member/leave',
            icon: icons.IconAccessibleOff,
            breadcrumbs: false,
            target: true
        },
        {
            id: 'memberProfile',
            title: 'Profile',
            type: 'item',
            url: '/member/profile',
            icon: icons.IconUser,
            breadcrumbs: false,
            target: true
        },
        {
            id: 'memberProjects',
            title: 'Projects',
            type: 'item',
            url: '/member/projects',
            icon: icons.IconDeviceLaptop,
            breadcrumbs: false,
            target: true
        }
    ]
};

export default pagesMember;
