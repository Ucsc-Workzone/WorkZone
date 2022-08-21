import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));
const ForgetPassword = Loadable(lazy(() => import('views/pages/authentication/authentication3/CreatePassword')));
const ForgetPasswordMain = Loadable(lazy(() => import('views/pages/authentication/authentication3/ForgetPassMain')));
// ==============================|| AUTHENTICATION ROUTING ||============================== //

const FinalRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/pages/login/login3',
            element: <AuthLogin3 />
        },
        {
            path: '/pages/register/register3',
            element: <AuthRegister3 />
        },
        {
            path: '/pages/forgetpassword',
            element: <ForgetPassword />
        },
        {
            path: '/pages/forgetpassword/main',
            element: <ForgetPasswordMain />
        }
    ]
};

export default FinalRoutes;
