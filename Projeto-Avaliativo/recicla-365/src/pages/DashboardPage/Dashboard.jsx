import { Button, Typography, Container, Box } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <Container>
            <Box sx={{ mt: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Dashboard
                </Typography>


                {user && (
                    <Typography variant="h6">
                        Bem-vindo(a), {user.nome}!
                    </Typography>
                )}

                <Button
                    variant="contained"
                    onClick={handleLogout}
                    sx={{ mt: 2 }}
                >
                    Sair
                </Button>
            </Box>
        </Container>
    );
};

export default Dashboard;