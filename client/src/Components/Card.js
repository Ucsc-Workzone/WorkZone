import { Typography } from '@mui/material';
import { padding } from '@mui/system';
// material-ui
import { Card, List, ListItem, ListItemAvatar, ListItemText, Skeleton } from '@mui/material';
const CardStyle = {
    width: '250px',
    backgroundColor: 'black',
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
const Cards = () => {
    return (
        <>
            <div style={CardStyle}>
                <Card sx={{ p: 2 }}>
                    <List sx={{ py: 0 }}>
                        <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                            <ListItemAvatar>
                                <Skeleton variant="rectangular" width={44} height={44} />
                            </ListItemAvatar>
                            <ListItemText
                                sx={{ py: 0 }}
                                primary={<Skeleton variant="rectangular" height={20} />}
                                secondary={<Skeleton variant="text" />}
                            />
                        </ListItem>
                    </List>
                </Card>
            </div>
        </>
    );
};

export default Cards;
