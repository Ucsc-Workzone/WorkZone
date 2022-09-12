import StickyHeadTable from 'Components/OrganizationList';
import './styles/User.css'
import { useEffect } from 'react';
import axios from 'axios';
const ManageOrganization = () => {

    useEffect(()=>{

        
    })
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