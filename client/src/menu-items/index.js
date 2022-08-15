import dashboard from './dashboard';
import pages from './pages';
import utilities from './utilities';
import other from './other';
import member from './member';
import coordinator from './coordinator';
import visitor from './visitor';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
    items: [member],
    items1: [dashboard, pages, utilities, other],
    items2: [dashboard, pages, utilities],
    items3: [coordinator],
    items0: [visitor]
};

export default menuItems;
