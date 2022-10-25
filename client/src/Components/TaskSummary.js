import { Box } from '@mui/system';
import { useState } from 'react';
import DoughtChart from 'Components/DoughtChart';
import './styles/projectSummary.css'
const TaskSummary = () => {
    const [userData, setUserData] = useState({
        // labels: ["CM", "NC"],
        datasets: [
            {
                label: 'Users Gained',
                data: [25, 75],
                backgroundColor: ['#0f65fa', '#c2c6d1'],
                borderColor: 'white',
                borderWidth: 2
            }
        ]
    });
    return (
        <>
            <div>
            
                <div className="graph">
                
                    <Box style={{ display: 'flex', justifyContent: 'center', width: '100%'}}>
                        <div style={{ width: '80%' }}>
                            <DoughtChart chartData={userData} percentage={'25'} />
                        </div>
                    </Box>
                </div>
            </div>
        </>
    );
};

export default TaskSummary;
