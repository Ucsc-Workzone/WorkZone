// assets
import { IconHome, IconAccessibleOff, IconUser, IconDeviceLaptop, IconLayoutDashboard } from '@tabler/icons';

// constant
const icons = {
    IconHome,
};

// ==============================|| Visitor PAGES MENU ITEMS ||============================== //

const pagesvisitor = {
    id: 'visitor',
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
        }
    ]
};

export default pagesvisitor;
