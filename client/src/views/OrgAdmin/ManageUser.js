import StickyHeadTable from 'Components/stickyheadertable';
import { Typography } from '@mui/material';
import './styles/User.css'


const ManageUser = () => {
    return ( 
        <>
            <div className="mainConatainer">
                <div className="container-down">
                    <div className="staff-container">
                        <Typography variant="h3" component="h4" className="">
                            All Users      
                        </Typography>
                        <StickyHeadTable />  
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ManageUser;