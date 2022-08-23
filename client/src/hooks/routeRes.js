import { useState,useEffect } from "react";
import axios from "axios";

const RoutesRes = () => {
    const [valid,setValid]=useState(false);
    useEffect(()=>{
        const token=localStorage.getItem('token');
        console.log(token)
        // axios
        //     .post('http://localhost:5000/api/auth/login', {
        //         username: email,
        //         password: password
        //     })
        //     .then((response) => {
        //         const data = response.data;
        //         console.log(data);
        //         if (!data['accessToken']) {
        //             alert(data['error']);
        //         } else {
        //             setLogin(true);
                   

                    

                   
        //         }
        //     });


    })
    return setValid;
}
 
export default RoutesRes;