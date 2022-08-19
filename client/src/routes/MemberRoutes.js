import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/Home')));

// ==============================|| MEMBER ROUTING ||============================== //

const MemberHome = Loadable(lazy(() => import('views/Member/Home')));
const MemberLeave = Loadable(lazy(() => import('views/Member/Leave')));
const MemberProfile = Loadable(lazy(() => import('views/Member/Profile')));
const MemberProjects = Loadable(lazy(() => import('views/Member/Profile')));


const Todo = Loadable(lazy(() => import('views/Member/Todo')));

const MemberRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
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
        },
        {
            path: 'member',
            children: [
                {
                    path: 'todo',
                    element: <Todo />
                }
            ]
        }
    ]
};

export default MemberRoutes;
