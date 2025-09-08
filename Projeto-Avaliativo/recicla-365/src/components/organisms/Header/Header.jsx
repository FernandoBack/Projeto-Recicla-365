import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <AppBar position="static">
            <Toolbar>

                <Box sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate('/')}>
                    <img
                        src="/src/public/logo-1.png"
                        alt="Recicla365 Logo"
                        style={{ height: '40px', display: 'block' }}
                    />
                </Box>

                <Box>
                    {user ? (

                        <>
                            {location.pathname !== '/dashboard' && (
                                <Button color="inherit" onClick={() => navigate('/dashboard')}>Pontos de Coleta</Button>
                            )}

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