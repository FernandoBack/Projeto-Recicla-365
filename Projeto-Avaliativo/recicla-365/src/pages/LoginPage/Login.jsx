import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { useAuth } from '../../contexts/AuthContext';
import {
    Container,
    Box,
    Typography,
    TextField,
    Button,
    Grid,
    Link,
} from '@mui/material';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        if (login(email, password)) {

            navigate('/');
        } else {
            alert('E-mail ou senha inválidos.');
        }
    };

    return (
        <div className={styles.root}>
            <Container component="main" maxWidth="xs">
                <Box className={styles.loginBox}>
                    <Typography component="h1" variant="h5" className={styles.title}>
                        Entrar
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="E-mail"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Entrar
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="/cadastro" variant="body2">
                                    {"Não tem uma conta? Cadastre-se"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default Login;