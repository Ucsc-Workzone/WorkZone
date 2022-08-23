import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import MemberRoutes from './MemberRoutes';
import CoordinatorRoutes from './CoordinatorRoutes';
import DirectorRoutes from './DirectorRoutes';
import SARRoutes from './SARRoutes';
import adminRoutes from './AdminRoutes';
import MARoutes from './ManagementAssistantRoutes';
// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([MainRoutes, AuthenticationRoutes, MemberRoutes, CoordinatorRoutes, DirectorRoutes, SARRoutes, adminRoutes, MARoutes]);
}
