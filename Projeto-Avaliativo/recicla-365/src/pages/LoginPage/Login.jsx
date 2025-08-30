import styles from './Login.module.css';
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
    return (
        <div className={styles.root}>
            <Container component="main" maxWidth="xs">
                <Box className={styles.loginBox}>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <Box component="form" noValidate clasName={styles.form}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Endereço de E-mail"
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
                            sx={{ mt: 3, mb: 2 }} // Manter espaçamentos pontuais com 'sx' é ok!
                        >
                            Entrar
                        </Button>

                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Esqueceu a senha?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
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



