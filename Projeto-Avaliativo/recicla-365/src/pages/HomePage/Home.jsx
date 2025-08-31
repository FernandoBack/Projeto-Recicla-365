import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <Container maxWidth="md">
            <Box sx={{ py: 8, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <Typography variant="h2" component="h1" fontWeight="bold">
                    Junte-se ao movimento Recicla365
                </Typography>
                <Typography variant="h5" color="text.secondary">
                    Encontre pontos de coleta, cadastre novos locais e ajude a construir um futuro mais sustentável.
                </Typography>
                <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate('/cadastro')}
                    sx={{ backgroundColor: '#2a9d8f', '&:hover': { backgroundColor: '#264653' } }}
                >
                    Comece a Reciclar Agora
                </Button>
            </Box>
        </Container>
    );
};

export default Home;