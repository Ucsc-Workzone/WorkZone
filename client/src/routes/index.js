import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import MemberRoutes from './MemberRoutes';
import CoordinatorRoutes from './CoordinatorRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([MainRoutes, AuthenticationRoutes, MemberRoutes, CoordinatorRoutes]);
}
