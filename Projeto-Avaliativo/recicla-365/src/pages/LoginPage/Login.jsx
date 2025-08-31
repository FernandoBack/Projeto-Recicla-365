import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import {
    Container,
    Box,
    Typography,
    TextField,
    Button,
} from '@mui/material';
import { useAuth } from '../../contexts/AuthContext.jsx';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email || !password) {
            alert("Por favor, preencha todos os campos.");
            return;
        }
        const success = login(email, password);
        if (success) {
            navigate('/dashboard');
        } else {
            alert("E-mail ou senha inválidos.");
        }
    };

    return (
        <div className={styles.root}>
            <Container component="main" maxWidth="xs">
                <Box className={styles.loginBox}>
                    <Typography component="h1" variant="h5">
                        Entrar no Recicla365
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate className={styles.form}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Endereço de E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Entrar
                        </Button>
                        <Button
                            type="button"
                            fullWidth
                            variant="outlined"
                            onClick={() => navigate('/cadastro')}
                        >
                            Cadastre-se
                        </Button>
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default Login;