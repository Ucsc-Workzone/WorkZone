import dashboard from './dashboard';
import pages from './pages';
import utilities from './utilities';
import other from './other';
import member from './member';
import coordinator from './coordinator';
import director from './director';
import visitor from'./visitor';
import sadmin from './sadmin';
import oadmin from './oadmin';
import ProjectListMember from './memberProjectList';
// import MA from './ma';
import SAR from './sar';


// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
    items: [dashboard, pages, utilities, other],
    items0: [dashboard, pages, utilities],
    items1: [visitor],
    items2: [member, ProjectListMember],
    items3: [coordinator],
    item4: [sadmin],
    item5: [oadmin],
    item6: [director],
    item7: [SAR]
};

export default menuItems;
