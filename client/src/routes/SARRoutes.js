import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// default dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/Home')));

// ==============================|| SAR ROUTING ||============================== //

const SARHome = Loadable(lazy(() => import('views/SAR/Home')));
const SARDashboard = Loadable(lazy(() => import('views/SAR/Dashboard')));
const SARProjects = Loadable(lazy(() => import('views/SAR/Projects')));
const SARStaff = Loadable(lazy(() => import('views/SAR/Staff')));
const SARWorkrecords = Loadable(lazy(() => import('views/SAR/Workrecords')));
const SARLeaves = Loadable(lazy(() => import('views/SAR/Leaves')));
const SARFeedback = Loadable(lazy(() => import('views/SAR/Feedback')));
const SARReports = Loadable(lazy(() => import('views/SAR/Reports')));
const SARProfile = Loadable(lazy(() => import('views/SAR/Profile')));

const SARRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <SamplePage />
        },
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
            path: 'SAR',
            children: [
                {
                    path: 'home',
                    element: <SARHome />
                }
            ]
        },
        {
            path: 'SAR',
            children: [
                {
                    path: 'dashboard',
                    element: <SARDashboard />
                }
            ]
        },
        {
            path: 'SAR',
            children: [
                {
                    path: 'projects',
                    element: <SARProjects />
                }
            ]
        },
        {
            path: 'SAR',
            children: [
                {
                    path: 'staff',
                    element: <SARStaff />
                }
            ]
        },
        {
            path: 'SAR',
            children: [
                {
                    path: 'workrecords',
                    element: <SARWorkrecords />
                }
            ]
        },
        {
            path: 'SAR',
            children: [
                {
                    path: 'leaves',
                    element: <SARLeaves />
                }
            ]
        },
        {
            path: 'SAR',
            children: [
                {
                    path: 'feedbacks',
                    element: <SARFeedback />
                }
            ]
        },
        {
            path: 'SAR',
            children: [
                {
                    path: 'reports',
                    element: <SARReports />
                }
            ]
        },
        {
            path: 'SAR',
            children: [
                {
                    path: 'profile',
                    element: <SARProfile />
                }
            ]
        }
    ]
};

export default SARRoutes;
