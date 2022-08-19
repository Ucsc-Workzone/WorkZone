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

const pagesMember = {
    id: 'member',
    title: 'General',
    type: 'group',

    children: [
        
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
        {
            id: 'todo',
            title: 'System Feedbacks',
            type: 'item',
            url: '/member/feedback',
            icon: FeedbackOutlinedIcon,
            breadcrumbs: false
        },
       
    ]
};

export default pagesMember;
