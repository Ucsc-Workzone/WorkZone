import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
// sample page routing
const SamplePage = Loadable(lazy(() => import('views/Home')));
// ==============================|| admin ROUTING ||============================== //
const AdminDashboard = Loadable(lazy(() => import('views/Admin/Dashboard')));
const AdminFeedback = Loadable(lazy(() => import('views/Admin/Feedback')));
const AdminRegister = Loadable(lazy(() => import('views/Admin/Register')));
const ManageUser = Loadable(lazy(() => import('views/Admin/ManageUser')));
const Annoucements = Loadable(lazy(() => import('views/Admin/Annoucements')));
const adminRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <SamplePage />
        },
      
        {
            path: 'admin',
            children: [
                {
                    path: 'dashboard',
                    element: <AdminDashboard />
                }
            ]
        },
        {
            path: 'admin',
            children: [
                {
                    path: 'manageuser',
                    element: <ManageUser />
                }
            ]
        },
        {
            path: 'admin',
            children: [
                {
                    path: 'annoucements',
                    element: <Annoucements />
                }
            ]
        },
        {
            path: 'admin',
            children: [
                {
                    path: 'feedbacks',
                    element: <AdminFeedback />
                }
            ]
        },
        {
            path: 'admin',
            children: [
                {
                    path: 'annoucements',
                    element: <adminReports />
                }
            ]
        },
        {
            path: 'admin',
            children: [
                {
                    path: 'register',
                    element: <AdminRegister />
                }
            ]
        }
    ]
};

export default adminRoutes;