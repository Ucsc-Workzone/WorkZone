import StickyHeadTable from 'Components/OrganizationList';
import './styles/User.css'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
const ManageOrganization = () => {
    const [array,setArray]=useState([]);

    useEffect(()=>{

        axios
        .post('http://localhost:5000/api/project/getorg', {
            
        })
        .then((response) => {
            console.log(response.data)
            setArray(response.data)
        });
    },[])
    return ( 
        <>
        <div className="mainConatainer">
            <div className="cardConatoner">

            </div>
            <div className="tableConatiner">
                <StickyHeadTable 
                data={array}
                />
            </div>
        </div>
        </>
     );
}
 
export default ManageOrganization;