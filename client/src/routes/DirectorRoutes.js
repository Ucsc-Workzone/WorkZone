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

// ==============================|| Director ROUTING ||============================== //

const DirectorHome = Loadable(lazy(() => import('views/Director/Home')));
const DirectorDashboard = Loadable(lazy(() => import('views/Director/Dashboard')));
const DirectorProjects = Loadable(lazy(() => import('views/Director/Projects')));
const DirectorStaff = Loadable(lazy(() => import('views/Director/Staff')));
const DirectorLeaves = Loadable(lazy(() => import('views/Director/Leaves')));
const DirectorFeedback = Loadable(lazy(() => import('views/Director/Feedback')));
const DirectorReports = Loadable(lazy(() => import('views/Director/Reports')));
const DirectorProfile = Loadable(lazy(() => import('views/Director/Profile')));

const DirectorRoutes = {
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
            path: 'Director',
            children: [
                {
                    path: 'home',
                    element: <DirectorHome />
                }
            ]
        },
        {
            path: 'Director',
            children: [
                {
                    path: 'dashboard',
                    element: <DirectorDashboard />
                }
            ]
        },
        {
            path: 'Director',
            children: [
                {
                    path: 'projects',
                    element: <DirectorProjects />
                }
            ]
        },
        {
            path: 'Director',
            children: [
                {
                    path: 'staff',
                    element: <DirectorStaff />
                }
            ]
        },
        {
            path: 'Director',
            children: [
                {
                    path: 'leaves',
                    element: <DirectorLeaves />
                }
            ]
        },
        {
            path: 'Director',
            children: [
                {
                    path: 'feedbacks',
                    element: <DirectorFeedback />
                }
            ]
        },
        {
            path: 'Director',
            children: [
                {
                    path: 'reports',
                    element: <DirectorReports />
                }
            ]
        },
        {
            path: 'Director',
            children: [
                {
                    path: 'profile',
                    element: <DirectorProfile />
                }
            ]
        }
    ]
};

export default DirectorRoutes;
