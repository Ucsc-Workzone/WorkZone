import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const LoginButton = () => {
    const [log, setLog] = useState('');
    useEffect(() => {
        const loginState = localStorage.getItem('loginStatus');
        setLog(loginState);
    });
    return (
        <>
            {!log == 'true' && (
                <Button variant="contained" component={Link} to="/pages/login/login3">
                    Login
                </Button>
            )}
        </>
    );
};

export default LoginButton;
