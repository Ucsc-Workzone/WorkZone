import dashboard from './dashboard';
import pages from './pages';
import utilities from './utilities';
import other from './other';
import member from './member';
import coordinator from './coordinator';
<<<<<<< HEAD
import Admin from './Admin';
import visitor from './visitor';
=======
import director from './director';
import visitor from './visitor';
import admin from './admin';
import ProjectListMember from './memberProjectList';
import MA from './ma';
import SAR from './sar';

>>>>>>> ba7068b973084811839542c6e429a372cbd31afc

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
    items: [member],
    items1: [dashboard, pages, utilities, other],
    items2: [dashboard, pages, utilities],
    items3: [coordinator],
    items0: [visitor],
<<<<<<< HEAD
    items4:[Admin]
=======
    item4: [admin],
    item5: [MA],
    item6: [director],
    item7: [SAR]
>>>>>>> ba7068b973084811839542c6e429a372cbd31afc
};

export default menuItems;
