import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase, Card, CardMedia } from '@mui/material';

// project imports
import config from 'config';
import Logo from '../../../assets/images/workzone.png';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
        <div className="e-logo">
            {' '}
            <Card sx={{ maxWidth: 200 }}>
                <CardMedia component="img" height="50" src={Logo} alt="green iguana" />
            </Card>
        </div>
    </ButtonBase>
);

export default LogoSection;
