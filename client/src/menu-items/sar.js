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

// ==============================|| SAR PAGES MENU ITEMS ||============================== //

const pagesSAR = {
    id: 'sar',
    title: 'General',
    type: 'group',

    children: [

        {
            id: 'SARDashboard',
            title: 'Dashborad',
            type: 'item',
            url: '/sar/dashboard',
            icon: icons.IconLayoutDashboard,
            breadcrumbs: false
        },
        {
            id: 'SARReports',
            title: 'Reports',
            type: 'item',
            url: '/sar/rports',
            icon: IconUserPlus,
            breadcrumbs: false
        },

        {
            id: 'SARFeedback',
            title: 'Feedback',
            type: 'item',
            url: '/sar/feedback',
            icon: FeedbackOutlinedIcon,
            breadcrumbs: false
        },




    ]
};

export default pagesSAR;
