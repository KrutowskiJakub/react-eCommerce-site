import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close'; // Import ikony zamknięcia
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function CardDrawer() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 400, height: '100%', display: 'flex', flexDirection: 'column' }} role="presentation">
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <IconButton onClick={toggleDrawer(false)} sx={{ color: 'black' }}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    direction="column"
                    sx={{
                        height: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Grid item>
                        <Typography
                            variant="h6"
                            color="black"
                            noWrap
                            component="div"
                            sx={{ fontWeight: 'bold' }}
                        >
                            Shopping Cart
                        </Typography>
                    </Grid>
                    <Grid item>
                        <h1>Zawartość koszyka</h1>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            sx={{
                                marginBottom: '20px',
                                fontSize: '16px',
                                minWidth: '300px',
                                height: '50px',
                                backgroundColor: 'black',
                                color: 'white'
                            }}
                        >
                            Przejdź do płatności
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );


    return (
        <>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2, color: 'black' }}
                onClick={toggleDrawer(true)}
            >
                <ShoppingCartIcon />
            </IconButton>
            <Drawer
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
            >
                {DrawerList}
            </Drawer>
        </>
    );
}
