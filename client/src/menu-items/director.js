// assets
import { IconHome, IconAccessibleOff, IconUser, IconDeviceLaptop, IconLayoutDashboard ,IconUsers ,IconReport} from '@tabler/icons';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';

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

// ==============================|| Director PAGES MENU ITEMS ||============================== //

const pagesDirector = {
    id: 'director',
    title: 'General',
    type: 'group',

    children: [
        {
            id: 'directorHome',
            title: 'Dashborad',
            type: 'item',
            url: '/director/dashboard',
            icon: icons.IconLayoutDashboard,
            breadcrumbs: false
        },
        {
            id: 'directorProjects',
            title: 'Projects',
            type: 'item',
            url: '/director/projects',
            icon: icons.IconDeviceLaptop,
            breadcrumbs: false
        },
        {
            id: 'directorStaff',
            title: 'Staff',
            type: 'item',
            url: '/director/staff',
            icon: icons.IconUsers,
            breadcrumbs: false
        },
       
        {
            id: 'directorLeave',
            title: 'Leave',
            type: 'item',
            url: '/director/leaves',
            icon: icons.IconAccessibleOff,
            breadcrumbs: false
        },
        {
            id: 'directorFeedbacks',
            title: 'Feedbacks',
            type: 'item',
            url: '/director/feedbacks',
            icon: FeedbackOutlinedIcon,
            breadcrumbs: false
        }
       
        
    ]
};

export default pagesDirector;
