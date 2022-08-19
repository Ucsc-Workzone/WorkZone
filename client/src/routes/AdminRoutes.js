import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';




// sample page routing
const SamplePage = Loadable(lazy(() => import('views/Home')));

// ==============================|| admin ROUTING ||============================== //

const adminHome = Loadable(lazy(() => import('views/Admin/Home')));
const adminDashboard = Loadable(lazy(() => import('views/Admin/Dashboard')));
const adminProjects = Loadable(lazy(() => import('views/Admin/Projects')));
const adminStaff = Loadable(lazy(() => import('views/Admin/Staff')));
const adminWorkrecords = Loadable(lazy(() => import('views/Admin/Workrecords')));
const adminLeaves = Loadable(lazy(() => import('views/Admin/Leaves')));
const adminFeedback = Loadable(lazy(() => import('views/Admin/Feedback')));
const adminReports = Loadable(lazy(() => import('views/Admin/Reports')));
const adminProfile = Loadable(lazy(() => import('views/Admin/Profile')));

const adminRoutes = {
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
                    element:    <adminHome />             }
            ]
        },
        {
            path: 'admin',
            children: [
                {
                    path: 'home',
                    element: <adminHome />
                }
            ]
        },
        {
            path: 'admin',
            children: [
                {
                    path: 'dashboard',
                    element: <adminDashboard />
                }
            ]
        },
        {
            path: 'admin',
            children: [
                {
                    path: 'projects',
                    element: <adminProjects />
                }
            ]
        },
        {
            path: 'admin',
            children: [
                {
                    path: 'staff',
                    element: <adminStaff />
                }
            ]
        },
        {
            path: 'admin',
            children: [
                {
                    path: 'workrecords',
                    element: <adminWorkrecords />
                }
            ]
        },
        {
            path: 'admin',
            children: [
                {
                    path: 'leaves',
                    element: <adminLeaves />
                }
            ]
        },
        {
            path: 'admin',
            children: [
                {
                    path: 'feedbacks',
                    element: <adminFeedback />
                }
            ]
        },
        {
            path: 'admin',
            children: [
                {
                    path: 'reports',
                    element: <adminReports />
                }
            ]
        },
        {
            path: 'admin',
            children: [
                {
                    path: 'profile',
                    element: <adminProfile />
                }
            ]
        }
    ]
};

export default adminRoutes;
