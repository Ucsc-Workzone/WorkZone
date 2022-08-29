import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

// assets
import './styles/404page.css'

// ================================|| 404- Page Not Found ||================================ //

const NotFound = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div class="container">
            <div class="row">	
                <div class="col-sm-12 ">
                    <div class="main_content">
                        <div class="text-section">
                            <div class="contant_box_404">
                                <h1 class="text-center ">404</h1>
                                <h3 class="h2">Looks like you're lost</h3>
                                <p>The page you are looking for is not available!</p>
                                <a href="http://localhost:3000/workzone" class="link_404">Go to Home</a>
                            </div>
                        </div>
                        <div class="four_zero_four_bg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
