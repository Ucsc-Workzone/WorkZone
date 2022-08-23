import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));
const CreatePassword = Loadable(lazy(() => import('views/pages/authentication/authentication3/CreatePassword')));
const ForgetPasswordMain = Loadable(lazy(() => import('views/pages/authentication/authentication3/ForgetPassMain')));
<<<<<<< HEAD
=======
const NotFound = Loadable(lazy(() => import('views/pages/authentication/authentication3/404Page')));
const EmailPage = Loadable(lazy(() => import('views/EmailConfirmation')));

>>>>>>> ba7068b973084811839542c6e429a372cbd31afc
// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
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
            path: '/pages/createpassword',
            element: <CreatePassword />
        },
        {
            path: '/pages/forgetpassword/main',
            element: <ForgetPasswordMain />
<<<<<<< HEAD
        }
=======
        },
        {
            path: '/pages/404page',
            element: <NotFound />
        },
        {
            path: '/pages/email',
            element: <EmailPage />
        },
        

>>>>>>> ba7068b973084811839542c6e429a372cbd31afc
    ]
};

export default AuthenticationRoutes;
