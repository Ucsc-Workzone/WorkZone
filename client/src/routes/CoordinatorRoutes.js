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

// ==============================|| Coordinator ROUTING ||============================== //

const CoordinatorHome = Loadable(lazy(() => import('views/Coordinator/Home')));
const CoordinatorDashboard = Loadable(lazy(() => import('views/Coordinator/Dashboard')));
const CoordinatorProjects = Loadable(lazy(() => import('views/Coordinator/Projects')));
const CoordinatorStaff = Loadable(lazy(() => import('views/Coordinator/Staff')));
const CoordinatorWorkrecords = Loadable(lazy(() => import('views/Coordinator/Workrecords')));
const CoordinatorLeaves = Loadable(lazy(() => import('views/Coordinator/Leaves')));
const CoordinatorFeedback = Loadable(lazy(() => import('views/Coordinator/Feedback')));
const CoordinatorReports = Loadable(lazy(() => import('views/Coordinator/Reports')));
const CoordinatorProfile = Loadable(lazy(() => import('views/Coordinator/Profile')));

const CoordinatorRoutes = {
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
            path: 'coordinator',
            children: [
                {
                    path: 'home',
                    element: <CoordinatorHome />
                }
            ]
        },
        {
            path: 'coordinator',
            children: [
                {
                    path: 'dashboard',
                    element: <CoordinatorDashboard />
                }
            ]
        },
        {
            path: 'coordinator',
            children: [
                {
                    path: 'projects',
                    element: <CoordinatorProjects />
                }
            ]
        },
        {
            path: 'coordinator',
            children: [
                {
                    path: 'staff',
                    element: <CoordinatorStaff />
                }
            ]
        },
        {
            path: 'coordinator',
            children: [
                {
                    path: 'workrecords',
                    element: <CoordinatorWorkrecords />
                }
            ]
        },
        {
            path: 'coordinator',
            children: [
                {
                    path: 'leaves',
                    element: <CoordinatorLeaves />
                }
            ]
        },
        {
            path: 'coordinator',
            children: [
                {
                    path: 'feedbacks',
                    element: <CoordinatorFeedback />
                }
            ]
        },
        {
            path: 'coordinator',
            children: [
                {
                    path: 'reports',
                    element: <CoordinatorReports />
                }
            ]
        },
        {
            path: 'coordinator',
            children: [
                {
                    path: 'profile',
                    element: <CoordinatorProfile />
                }
            ]
        }
    ]
};

export default CoordinatorRoutes;
