import { Typography } from '@mui/material';
import ReportList from './ReportList'
import './styles/workreports.css';
const PendingWorkMember = () => {
    return (
        <>
            <div className="pendingwork">
                <div className="cardpending">
                    <Typography variant="h2" component="h2" className="" style={{ marginBottom: '20px', marginTop: '20px' }}>
                        Work Reports
                    </Typography>
                  
                </div>
                <div className="summarywork">
                    <ReportList /> </div>
            </div>
        </>
    );
};

export default PendingWorkMember;
