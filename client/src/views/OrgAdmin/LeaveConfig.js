import NoLeaveConfig from '../../Components/NoLeaveConfig';
import HaveLeaveConfig from '../../Components/HaveLeaveConfig';

const ConfigLeaves = () => {
    const states = 0;

    return ( 
        <>
           { 
                states== 0 && <NoLeaveConfig />      
           } 
           { 
                states== 1 && <HaveLeaveConfig />
           } 



        </>
     );
}
 
export default ConfigLeaves;