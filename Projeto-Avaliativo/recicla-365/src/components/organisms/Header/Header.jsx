// src/components/organisms/Header/Header.jsx

import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import styles from './Header.module.css';

const Header = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const { user, logout } = useAuth();
    const location = useLocation();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <AppBar position="static">
            <Toolbar>

                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <img
                        src="/public/logo.png"
                        style={{ height: '40px', cursor: 'pointer' }}
                        onClick={() => navigate('/')}
                    />
                </Box>

                {/* Logo para telas pequenas (se desejar uma versão menor ou diferente) */}
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <img
                        src="/public/logo.png"
                        alt="Recicla365 Logo"
                        style={{ height: '30px', cursor: 'pointer' }}
                        onClick={() => navigate('/')}
                    />
                </Box>

                {user ? (
                    <Box sx={{ display: 'flex' }}>
                        {location.pathname !== '/dashboard' && (
                            <Button color="inherit" onClick={() => navigate('/dashboard')}>
                                Gerenciar Locais de Coleta
                            </Button>
                        )}
                        <Button color="inherit" onClick={handleLogout}>
                            Sair
                        </Button>
                    </Box>
                ) : (
                    <Box sx={{ display: 'flex' }}>
                        <Button color="inherit" onClick={() => navigate('/cadastro')}>
                            Cadastro
                        </Button>
                        <Button color="inherit" onClick={() => navigate('/login')}>
                            Login
                        </Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;