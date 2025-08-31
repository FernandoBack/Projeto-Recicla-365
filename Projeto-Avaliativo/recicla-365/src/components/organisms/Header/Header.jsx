import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { useAuth } from '../../../contexts/AuthContext';

const Header = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/');
    };


    const appBarClassName = user ? styles.appBarPrivate : styles.appBarPublic;

    return (
        <AppBar position="static" className={appBarClassName}>
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, cursor: 'pointer' }}

                    onClick={() => navigate('/')}
                >
                    Recicla365 ♻️
                </Typography>
                <Box>
                    {user ? (

                        <>
                            <Button color="inherit" onClick={() => navigate('/dashboard')}>Dashboard</Button>
                            <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
                            <Button color="inherit" onClick={handleLogout}>Sair</Button>
                        </>
                    ) : (

                        <>
                            <Button color="inherit" onClick={() => navigate('/login')}>Entrar</Button>
                            <Button color="inherit" onClick={() => navigate('/cadastro')}>Cadastre-se</Button>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;