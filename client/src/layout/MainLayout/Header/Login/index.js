import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const LoginButton = () => {
    return (
        <>
            <Button variant="contained" component={Link} to="/pages/login/login3">
                Login
            </Button>
        </>
    );
};

export default LoginButton;
