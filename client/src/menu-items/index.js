import dashboard from './dashboard';
import pages from './pages';
import utilities from './utilities';
import other from './other';
import member from './member';
import coordinator from './coordinator';
import visitor from './visitor';
import admin from './admin';
import ProjectListMember from './memberProjectList';
import MA from './ma';


// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
    items: [member, ProjectListMember],
    items1: [dashboard, pages, utilities, other],
    items2: [dashboard, pages, utilities],
    items3: [coordinator],
    items0: [visitor],
    item4: [admin],
    item5: [MA]
};

export default menuItems;
