import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
const Landing = Loadable(lazy(() => import('views/pages/authentication/authentication3/Landing')));
const Signup = Loadable(lazy(() => import('views/pages/authentication/authentication3/signup')));
// sample page routing
// const SamplePage = Loadable(lazy(() => import('views/Home')));

// ==============================|| MAIN ROUTING ||============================== //


const MainRoutes = {
    path: '/',
    element: <Landing />,
    children: [
        // {
        //     path: '/',
        //     element: <SamplePage />
        // },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-shadow',
                    element: <UtilsShadow />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'tabler-icons',
                    element: <UtilsTablerIcons />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'material-icons',
                    element: <UtilsMaterialIcons />
                }
            ]
        },
        // {
        //     path: 'sample-page',
        //     element: <SamplePage />
        // },
        {
            path: 'signup',
            element: <Signup />
          
        },
    ]
};

export default MainRoutes;
