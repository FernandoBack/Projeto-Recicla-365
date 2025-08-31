import { Box, Typography, Button, Container } from '@mui/material';
import styles from './Home.module.css';

const Home = () => {

    return (

        <div className={styles.homeContainer}>
            <Container maxWidth="lg" sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: 'calc(100vh - 64px)'
            }}
            >
                <Box sx={{ my: 4, textAlign: 'center', color: 'white' }}>
                    <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Recicle, Transforme, Inspire.
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 4, maxWidth: '700px', mx: 'auto' }}>
                        Junte-se à comunidade Recicla365 e faça a diferença no seu bairro. Encontre pontos de coleta, registre novos locais e acompanhe o impacto positivo da sua atitude.
                    </Typography>



                </Box>


            </Container>
        </div>
    );
};

export default Home;