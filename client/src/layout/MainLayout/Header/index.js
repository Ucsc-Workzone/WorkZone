import PropTypes from 'prop-types';
import { useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase } from '@mui/material';

// project imports
import LogoSection from '../LogoSection';
import SearchSection from './SearchSection';
import ProfileSection from './ProfileSection';
import NotificationSection from './NotificationSection';
import axios from 'axios';
// assets
import { IconMenu2 } from '@tabler/icons';
import LoginButton from './MemberReport.js';
import { useState } from 'react';
import SubmitReport from './MemberReport.js/SubmitReport';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }) => {
    const [login, setLogin] = useState(false);
    const [user,setUser]=useState('');
    const [checkreport,setCheckreport]=useState(false)
    const theme = useTheme();
    useEffect(() => {
        const loginStat = localStorage.getItem('loginStatus');
        const userrole=localStorage.getItem('userRole');
        const token=localStorage.getItem('token')

        setUser(userrole)
        if(user=="member"){
            axios
        .post('http://localhost:5000/api/member/checkduty', {
            accessToken: token
        })
        .then((response) => {
           if(response.data){
setCheckreport(true);
           }
           
        });
        }
        setLogin(loginStat);
        console.log(login)
    });

    return (
        <>
            
            <Box
                sx={{
                    width: 228,
                    display: 'flex',
                    [theme.breakpoints.down('md')]: {
                        width: 'auto'
                    }
                }}
            >
                <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
                    <LogoSection />
                </Box>
                <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
                    {
                        <Avatar
                            variant="rounded"
                            sx={{
                                ...theme.typography.commonAvatar,
                                ...theme.typography.mediumAvatar,
                                transition: 'all .2s ease-in-out',
                                background: theme.palette.secondary.light,
                                color: theme.palette.secondary.dark,
                                '&:hover': {
                                    background: theme.palette.secondary.dark,
                                    color: theme.palette.secondary.light
                                }
                            }}
                            onClick={handleLeftDrawerToggle}
                            color="inherit"
                        >
                            <IconMenu2 stroke={1.5} size="1.3rem" />
                        </Avatar>
                    }
                </ButtonBase>
            </Box>

            {/* header search */}
            {/* {login && <SearchSection />

         }    */}
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ flexGrow: 1 }} />

            {/* notification & profile */}
            
            {user=='member' && checkreport==false && <LoginButton />}
            {user=='member' && checkreport==true && <SubmitReport />}
            {login && <NotificationSection />}
            {login && <ProfileSection />}
        </>
    );
};

Header.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
};

export default Header;
