import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
// sample page routing
const SamplePage = Loadable(lazy(() => import('views/Home')));
// ==============================|| OrgAdmin ROUTING ||============================== //
const OrgAdminDashboard = Loadable(lazy(() => import('views/OrgAdmin/Dashboard')));
const OrgAdminFeedback = Loadable(lazy(() => import('views/OrgAdmin/Feedback')));
const OrgAdminRegister = Loadable(lazy(() => import('views/OrgAdmin/Register')));
const ManageUser = Loadable(lazy(() => import('views/OrgAdmin/ManageUser')));
const Annoucements = Loadable(lazy(() => import('views/OrgAdmin/Annoucements')));
const OrgAdminRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <SamplePage />
        },
      
        {
            path: 'orgadmin',
            children: [
                {
                    path: 'dashboard',
                    element: <OrgAdminDashboard />
                }
            ]
        },
        {
            path: 'orgadmin',
            children: [
                {
                    path: 'manageuser',
                    element: <ManageUser />
                }
            ]
        },
        {
            path: 'orgadmin',
            children: [
                {
                    path: 'annoucements',
                    element: <Annoucements />
                }
            ]
        },
        {
            path: 'orgadmin',
            children: [
                {
                    path: 'feedbacks',
                    element: <OrgAdminFeedback />
                }
            ]
        },
        {
            path: 'orgadmin',
            children: [
                {
                    path: 'register',
                    element: <OrgAdminRegister />
                }
            ]
        }
    ]
};

export default OrgAdminRoutes;