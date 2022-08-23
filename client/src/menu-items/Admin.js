// assets
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



// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const AdminRoute = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/admin/home',
            icon: icons.IconLayoutDashboard,
            breadcrumbs: false
        }
    ]
};

export default AdminRoute;
