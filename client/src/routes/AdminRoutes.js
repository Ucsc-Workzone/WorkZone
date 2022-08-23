import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
<<<<<<< HEAD




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

=======
// sample page routing
const SamplePage = Loadable(lazy(() => import('views/Home')));
// ==============================|| admin ROUTING ||============================== //
const AdminDashboard = Loadable(lazy(() => import('views/Admin/Dashboard')));
const AdminFeedback = Loadable(lazy(() => import('views/Admin/Feedback')));
const AdminRegister = Loadable(lazy(() => import('views/Admin/Register')));
const ManageUser = Loadable(lazy(() => import('views/Admin/ManageUser')));
const Annoucements = Loadable(lazy(() => import('views/Admin/Annoucements')));
>>>>>>> ba7068b973084811839542c6e429a372cbd31afc
const adminRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <SamplePage />
        },
<<<<<<< HEAD
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
=======
      
>>>>>>> ba7068b973084811839542c6e429a372cbd31afc
        {
            path: 'admin',
            children: [
                {
                    path: 'dashboard',
<<<<<<< HEAD
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
=======
                    element: <AdminDashboard />
>>>>>>> ba7068b973084811839542c6e429a372cbd31afc
                }
            ]
        },
        {
            path: 'admin',
            children: [
                {
<<<<<<< HEAD
                    path: 'workrecords',
                    element: <adminWorkrecords />
=======
                    path: 'manageuser',
                    element: <ManageUser />
>>>>>>> ba7068b973084811839542c6e429a372cbd31afc
                }
            ]
        },
        {
            path: 'admin',
            children: [
                {
<<<<<<< HEAD
                    path: 'leaves',
                    element: <adminLeaves />
=======
                    path: 'annoucements',
                    element: <Annoucements />
>>>>>>> ba7068b973084811839542c6e429a372cbd31afc
                }
            ]
        },
        {
            path: 'admin',
            children: [
                {
                    path: 'feedbacks',
<<<<<<< HEAD
                    element: <adminFeedback />
=======
                    element: <AdminFeedback />
>>>>>>> ba7068b973084811839542c6e429a372cbd31afc
                }
            ]
        },
        {
            path: 'admin',
            children: [
                {
<<<<<<< HEAD
                    path: 'reports',
=======
                    path: 'annoucements',
>>>>>>> ba7068b973084811839542c6e429a372cbd31afc
                    element: <adminReports />
                }
            ]
        },
        {
            path: 'admin',
            children: [
                {
<<<<<<< HEAD
                    path: 'profile',
                    element: <adminProfile />
=======
                    path: 'register',
                    element: <AdminRegister />
>>>>>>> ba7068b973084811839542c6e429a372cbd31afc
                }
            ]
        }
    ]
};

<<<<<<< HEAD
export default adminRoutes;
=======
export default adminRoutes;
>>>>>>> ba7068b973084811839542c6e429a372cbd31afc
