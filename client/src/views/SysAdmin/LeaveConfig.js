import * as React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';
import NoLeaveConfig from '../../Components/NoLeaveConfig';
import HaveLeaveConfig from '../../Components/HaveLeaveConfig';

const ConfigLeaves = () => {

     const [states, setStates] = React.useState(1);

     // axios
     //          .post('http://localhost:5000/api/leave/isLeaveConfig', {
     //              idLeaveConfig: "#3001",
     //          })
     //          .then((response) => {
     //              console.log(response);
     //              setStates(response);    
     //          });

     // useEffect(() => {
     //      axios
     //          .post('http://localhost:5000/api/leave/isLeaveConfig', {
     //              idLeaveConfig: "#3001",
     //          })
     //          .then((response) => {
     //              console.log(response.data);
     //              setStates(response.data);    
     //          });
     //  }, []);

    

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