import StickyHeadTable from 'Components/OrganizationList';
import './styles/User.css'
const ManageOrganization = () => {
    return ( 
        <>
        <div className="mainConatainer">
            <div className="cardConatoner">

            </div>
            <div className="tableConatiner">
                <StickyHeadTable />
            </div>
        </div>
        </>
     );
}
 
export default ManageOrganization;