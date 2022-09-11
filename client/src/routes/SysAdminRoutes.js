import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
// sample page routing
const SamplePage = Loadable(lazy(() => import('views/Home')));
// ==============================|| admin ROUTING ||============================== //
const SysAdminDashboard = Loadable(lazy(() => import('views/SysAdmin/Dashboard')));
const SysAdminFeedback = Loadable(lazy(() => import('views/SysAdmin/Feedback')));
const SysAdminRegister = Loadable(lazy(() => import('views/SysAdmin/Register')));
const SysAdminManageOrg = Loadable(lazy(() => import('views/SysAdmin/ManageOrg')));
const Annoucements = Loadable(lazy(() => import('views/SysAdmin/Annoucements')));

const SysAdminRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <SamplePage />
        },
      
        {
            path: 'sysadmin',
            children: [
                {
                    path: 'dashboard',
                    element: <SysAdminDashboard />
                }
            ]
        },
        // {
        //     path: 'sysadmin',
        //     children: [
        //         {
        //             path: 'manageuser',
        //             element: <ManageUser />
        //         }
        //     ]
        // },
        {
            path: 'sysadmin',
            children: [
                {
                    path: 'annoucements',
                    element: <Annoucements />
                }
            ]
        },
        {
            path: 'sysadmin',
            children: [
                {
                    path: 'feedbacks',
                    element: <SysAdminFeedback />
                }
            ]
        },
        {
            path: 'sysadmin',
            children: [
                {
                    path: 'register',
                    element: <SysAdminRegister />
                }
            ]
        },
        {
            path: 'sysadmin',
            children: [
                {
                    path: 'manageorganizaton',
                    element: <SysAdminManageOrg />
                }
            ]
        }
    ]
};

export default SysAdminRoutes;