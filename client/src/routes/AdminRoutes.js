import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';




// sample page routing
const SamplePage = Loadable(lazy(() => import('views/Home')));

// ==============================|| admin ROUTING ||============================== //


const AdminDashboard = Loadable(lazy(() => import('views/Admin/Dashboard')));
// const adminProjects = Loadable(lazy(() => import('views/Admin/Projects')));
// const adminStaff = Loadable(lazy(() => import('views/Admin/Staff')));
// const adminWorkrecords = Loadable(lazy(() => import('views/Admin/Workrecords')));
// const adminLeaves = Loadable(lazy(() => import('views/Admin/Leaves')));
const AdminFeedback = Loadable(lazy(() => import('views/Admin/Feedback')));
//const adminReports = Loadable(lazy(() => import('views/Admin/Reports')));
const AdminRegister = Loadable(lazy(() => import('views/Admin/Register')));

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
        // {
        //     path: 'admin',
        //     children: [
        //         {
        //             path: 'projects',
        //             element: <adminProjects />
        //         }
        //     ]
        // },
        // {
        //     path: 'admin',
        //     children: [
        //         {
        //             path: 'staff',
        //             element: <adminStaff />
        //         }
        //     ]
        // },
        // {
        //     path: 'admin',
        //     children: [
        //         {
        //             path: 'workrecords',
        //             element: <adminWorkrecords />
        //         }
        //     ]
        // },
        // {
        //     path: 'admin',
        //     children: [
        //         {
        //             path: 'leaves',
        //             element: <adminLeaves />
        //         }
        //     ]
        // },
        {
            path: 'admin',
            children: [
                {
                    path: 'feedbacks',
                    element: <AdminFeedback />
                }
            ]
        },
        // {
        //     path: 'admin',
        //     children: [
        //         {
        //             path: 'reports',
        //             element: <adminReports />
        //         }
        //     ]
        // },
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