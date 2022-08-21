import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery, Card, CardMedia } from '@mui/material';
import { useEffect } from 'react';
// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import AuthLogin from '../auth-forms/CreatePassword';
import Logo from 'ui-component/Logo';
import AuthFooter from 'ui-component/cards/AuthFooter';
import logo from '../../../../assets/images/workzone.png';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
const errorsAlert = {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    // backgroundColor:'#000',
    height: '300px'
    // marginTop:'200px'
};
const alertError = {
    marginTop: '200px',
    height: '200px'
};

const errorsSuc={
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',

}
const errorsSucA={
    
    marginTop:'20px'
}
// assets

// ================================|| AUTH3 - LOGIN ||================================ //

const ForgetPass = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const [searchParams] = useSearchParams();
    const [render, setRender] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccuess] = useState(false);
    useEffect(() => {
        // const queryParams = new URLSearchParams(window.location.search);
        // const id = queryParams.get('token');

        // console.log(id)

        const id = searchParams.get('token');

        axios
            .post('http://localhost:5000/api/auth/validateregmail', {
                token: id
            })
            .then((response) => {
                console.log(response.data);
                if (response.data == 1) {
                    setRender(true);
                    setSuccuess(true);
                    setTimeout(() => {
                        setSuccuess(false);
                    }, 3000);
                } else {
                    setError(true);
                }
            });
    }, []);

    return (
        <AuthWrapper1>
            {error && (
                <>
                    <div style={errorsAlert}>
                        <Alert severity="error" style={errorsSucA}>
                            <AlertTitle>
                                <h1>Email Verification Fail</h1>
                            </AlertTitle>
                            email verification link missing or damage — <strong>Plase Conatct Your Administrator</strong>
                        </Alert>
                    </div>
                </>
            )}
            {success && (
                <>
                    <div style={errorsSuc}>
                        <Alert severity="success">
                            <AlertTitle>Email Verification success</AlertTitle>
                           Create a new password and login <strong>check it out!</strong>
                        </Alert>
                    </div>
                </>
            )}
            {render && (
                <>
                    <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                        <Grid item xs={12}>
                            <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                                <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                                    <AuthCardWrapper>
                                        <Grid container spacing={2} alignItems="center" justifyContent="center">
                                            <Grid item sx={{ mb: 3 }}>
                                                <div className="e-logo">
                                                    {' '}
                                                    <Card sx={{ maxWidth: 250 }}>
                                                        <CardMedia component="img" height="60" src={logo} alt="green iguana" />
                                                    </Card>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Grid
                                                    container
                                                    direction={matchDownSM ? 'column-reverse' : 'row'}
                                                    alignItems="center"
                                                    justifyContent="center"
                                                >
                                                    <Grid item>
                                                        <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                            <Typography
                                                                variant="caption"
                                                                fontSize="16px"
                                                                textAlign={matchDownSM ? 'center' : 'inherit'}
                                                            >
                                                                Change Your Password
                                                            </Typography>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <AuthLogin />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Divider />
                                            </Grid>
                                            <Grid item xs={12}></Grid>
                                        </Grid>
                                    </AuthCardWrapper>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                            <AuthFooter />
                        </Grid>
                    </Grid>
                </>
            )}
        </AuthWrapper1>
    );
};

export default ForgetPass;
