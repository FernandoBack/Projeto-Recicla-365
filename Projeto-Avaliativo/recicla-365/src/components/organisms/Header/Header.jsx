import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    const navigate = useNavigate();
    return (
        <AppBar position="static" className={styles.appBar}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate('/')}>
                    Recicla365 ♻️
                </Typography>
                <Box>
                    <Button color="inherit" onClick={() => navigate('/login')}>Entrar</Button>
                    <Button color="inherit" onClick={() => navigate('/cadastro')}>Cadastre-se</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
export default Header;