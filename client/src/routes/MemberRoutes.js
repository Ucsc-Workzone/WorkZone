import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/Home')));

// ==============================|| MAIN ROUTING ||============================== //

//test routes
const AdminHome = Loadable(lazy(() => import('views/Admin')));
const CoordinatorHome = Loadable(lazy(() => import('views/Coordinator')));

const MemberHome = Loadable(lazy(() => import('views/Member/Home')));
const MemberLeave = Loadable(lazy(() => import('views/Member/Leave')));
const MemberProfile = Loadable(lazy(() => import('views/Member/Profile')));
const MemberProjects = Loadable(lazy(() => import('views/Member/Profile')));

const MemberRoutes = {
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
            path: 'admin',
            children: [
                {
                    path: 'home',
                    element: <AdminHome />
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
            path: 'member',
            children: [
                {
                    path: 'home',
                    element: <MemberHome />
                }
            ]
        },
        {
            path: 'member',
            children: [
                {
                    path: 'leave',
                    element: <MemberLeave />
                }
            ]
        },
        {
            path: 'member',
            children: [
                {
                    path: 'profile',
                    element: <MemberProfile />
                }
            ]
        },
        {
            path: 'member',
            children: [
                {
                    path: 'projects',
                    element: <MemberProjects />
                }
            ]
        }
    ]
};

export default MemberRoutes;
