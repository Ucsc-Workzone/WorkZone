import { useRoutes } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';
// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import MemberRoutes from './MemberRoutes';
import CoordinatorRoutes from './CoordinatorRoutes';
import DirectorRoutes from './DirectorRoutes';
import SARRoutes from './SARRoutes';
import SysAdminRoutes from './SysAdminRoutes';
import OrgAdminRoutes from './OrgAdminRoutes';
// ==============================|| ROUTING RENDER ||============================== //


export default function ThemeRoutes() {

    const [role,setRole]=useState('')

    useEffect(()=>{
        const token=localStorage.getItem('token');
        axios
                .post('http://localhost:5000/api/auth/roleconfig', {
                    accessToken: token
                })
                .then((response) => {
                    const data = response.data;
                    setRole(data)
                    console.log(data);
                  
                });
    
    
    },[])
    if(role=='member'){
        return useRoutes([MainRoutes, AuthenticationRoutes, MemberRoutes]);
    }

    if(role=='coordinator'){
        return useRoutes([MainRoutes, AuthenticationRoutes, MemberRoutes, CoordinatorRoutes]);
    }

    if(role=='SAR'){
        return useRoutes([MainRoutes, AuthenticationRoutes, SARRoutes]);
    }

    if(role=='director'){
        return useRoutes([MainRoutes, AuthenticationRoutes, DirectorRoutes]);
    }

    if(role=='sysadmin'){
        return useRoutes([MainRoutes, AuthenticationRoutes, SysAdminRoutes]);
    }
    
    if(role=='orgadmin'){
        return useRoutes([MainRoutes, AuthenticationRoutes, OrgAdminRoutes]);
    }
    else{
        return useRoutes([MainRoutes, AuthenticationRoutes]);
    }
   
}
