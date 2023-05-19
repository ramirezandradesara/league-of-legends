import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';
import { useNavigate } from 'react-router-dom'
import { ScrollTop } from './ScrollTop';

const pages = ['champions', 'favorites'];

/**
 * @returns {JSX.Element}
 */

function ResponsiveAppBar() {

    const navegador = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="fixed" sx={{ backgroundColor: "#1a1a1adf" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <KeyboardOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        onClick={() => navegador('/')}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            fontFamily: "regular-lol",
                        }}>
                        PORO.GANK
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ backgroundColor: "#18181a8d", display: { xs: 'block', md: 'none' } }}>
                            {pages.map((page) => (
                                <MenuItem
                                    sx={{ '&:hover': { backgroundColor: '#b6b4b4' } }}
                                    key={page}
                                    onClick={() => { handleCloseNavMenu(); navegador(`/${page}`) }}>
                                    <Typography
                                        textAlign="center"
                                        sx={{
                                            fontFamily: "bold-lol",
                                            textTransform: 'capitalize',
                                            color: '#1a1a1adf'
                                        }}>
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <KeyboardOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            textDecoration: 'none',
                            fontFamily: "regular-lol",
                        }}>
                        PORO.GANK
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => { handleCloseNavMenu(); navegador(`/${page}`) }}
                                sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'bold-lol' }}>
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
            <ScrollTop children={undefined} />
        </AppBar>
    );
}
export default ResponsiveAppBar;