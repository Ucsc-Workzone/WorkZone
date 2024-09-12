import StickyHeadTable from 'Components/OrganizationList';
import './styles/User.css'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
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