// assets
import { IconHome, IconAccessibleOff, IconUser, IconDeviceLaptop, IconLayoutDashboard ,IconUsers ,IconReport} from '@tabler/icons';
import FeedbackIcon from '@mui/icons-material/Feedback';
// constant
const icons = {
    IconHome,
    IconAccessibleOff,
    IconUser,
    IconUsers,
    IconDeviceLaptop,
    IconLayoutDashboard,
    IconReport
};

// ==============================|| Coordinator PAGES MENU ITEMS ||============================== //

const pagesCoordinator = {
    id: 'coordinator',
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
            id: 'coordinatorHome',
            title: 'Dashborad',
            type: 'item',
            url: '/coordinator/dashboard',
            icon: icons.IconLayoutDashboard,
            breadcrumbs: false
        },
        {
            id: 'coordinatorProjects',
            title: 'Projects',
            type: 'item',
            url: '/coordinator/projects',
            icon: icons.IconDeviceLaptop,
            breadcrumbs: false
        },
        {
            id: 'coordinatorStaff',
            title: 'Staff',
            type: 'item',
            url: '/coordinator/staff',
            icon: icons.IconUsers,
            breadcrumbs: false
        },
        {
            id: 'coordinatorWorkRecords',
            title: 'Work Records',
            type: 'item',
            url: '/coordinator/workrecords',
            icon: icons.IconReport,
            breadcrumbs: false
        },
        {
            id: 'coordinatorLeave',
            title: 'Leave',
            type: 'item',
            url: '/coordinator/leaves',
            icon: icons.IconAccessibleOff,
            breadcrumbs: false
        },
        {
            id: 'coordinatorProfile',
            title: 'Profile',
            type: 'item',
            url: '/coordinator/profile',
            icon: icons.IconUser,
            breadcrumbs: false
        },
        {
            id: 'coordinatorFeedbacks',
            title: 'Feedbacks',
            type: 'item',
            url: '/coordinator/feedbacks',
            icon: FeedbackIcon,
            breadcrumbs: false
        }
       
        
    ]
};

export default pagesCoordinator;
