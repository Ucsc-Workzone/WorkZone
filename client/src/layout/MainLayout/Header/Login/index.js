import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
localStorage.setItem('loginStatus', false);
const LoginButton = () => {
    const [log, setLog] = useState(false);
    useEffect(() => {
        const loginState = localStorage.getItem('loginStatus');
        setLog(loginState);
 
    });
    return (
        <>
            <Button variant="contained" component={Link} to="/pages/login/login3">
                Login
            </Button>
        </>
    );
};

export default LoginButton;
