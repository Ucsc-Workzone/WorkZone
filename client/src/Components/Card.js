import { Typography } from '@mui/material';
import { padding } from '@mui/system';
const CardStyle = {
    width: '250px',
    backgroundColor: 'white',
    height: '120px',
    borderRadius: '10px',
    padding: '20px'
    // display: 'flex',
    // flexDirection: 'coloumn'
};
const mainContent = {
    textAlign: 'center',
    fontSize: '23px',
    paddingTop: '5px'
};

const subContent = {
    textAlign: 'center',
    fontSize: '28px',
    padding: '5px',
    color: '#1E4084'
};
const Card = () => {
    return (
        <>
            <div style={CardStyle}>
                <div style={mainContent}>
                    <Typography variant="h3" component="h2" style={mainContent}>
                        No. of Leaves
                    </Typography>
                </div>
                <div style={subContent}>
                    <Typography variant="h3" component="h2" style={subContent}>
                        10
                    </Typography>
                </div>
            </div>
        </>
    );
};

export default Card;
