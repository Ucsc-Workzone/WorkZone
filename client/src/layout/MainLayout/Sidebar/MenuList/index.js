// material-ui
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
// project imports
import NavGroup from './NavGroup';
import menuItem from 'menu-items';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
    const [userRole, setuserRole] = useState('');
    useEffect(() => {
        const userRole = localStorage.getItem('userRole');
        setuserRole(userRole);
    });

    const navItems = menuItem.items1.map((item) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item} />;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });
    const navItems1 = menuItem.items.map((item) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item} />;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });
    const navItems2= menuItem.items2.map((item) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item} />;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });
    const navItems3= menuItem.items3.map((item) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item} />;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    return <>
    {userRole == 'member' && navItems1}
    {userRole == 'admin' && navItems2}
    {userRole == 'coordinator' && navItems3}
    {userRole == 'sar' && navItems}
    
    </>;
};

export default MenuList;
