// assets
import { IconHome, IconAccessibleOff, IconUser, IconDeviceLaptop, IconLayoutDashboard, IconUserPlus, IconBellRinging2 } from '@tabler/icons';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
// constant
const icons = {
    IconHome,
    IconAccessibleOff,
    IconUser,
    IconDeviceLaptop,
    IconLayoutDashboard
};

// ==============================|| MA PAGES MENU ITEMS ||============================== //

const pagesMA = {
    id: 'member',
    title: 'General',
    type: 'group',

    children: [

        {
            id: 'MADashboard',
            title: 'Dashborad',
            type: 'item',
            url: '/ma/dashboard',
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
            id: 'MAReports',
            title: 'Reports',
            type: 'item',
            url: '/ma/rports',
            icon: IconUserPlus,
            breadcrumbs: false
        },

        {
            id: 'MAFeedback',
            title: 'Feedback',
            type: 'item',
            url: '/ma/feedback',
            icon: FeedbackOutlinedIcon,
            breadcrumbs: false
        },




    ]
};

export default pagesMA;
