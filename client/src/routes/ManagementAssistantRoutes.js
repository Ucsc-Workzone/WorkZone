import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
// sample page routing
const SamplePage = Loadable(lazy(() => import('views/Home')));
// ==============================|| admin ROUTING ||============================== //
const MADashboard = Loadable(lazy(() => import('views/MA/Dashboard')));
const MAFeedback = Loadable(lazy(() => import('views/MA/Feedback')));
const MAReports = Loadable(lazy(() => import('views/MA/Reports')));

const adminRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <SamplePage />
        },

        {
            path: 'ma',
            children: [
                {
                    path: 'dashboard',
                    element: <MADashboard />
                }
            ]
        },
        {
            path: 'ma',
            children: [
                {
                    path: 'feedback',
                    element: <MAFeedback />
                }
            ]
        },
        {
            path: 'ma',
            children: [
                {
                    path: 'reports',
                    element: <MAReports />
                }
            ]
        }
    ]
};

export default adminRoutes;