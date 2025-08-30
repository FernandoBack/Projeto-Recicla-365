// src/pages/Cadastro.jsx

import { useState } from 'react';
import styles from './Cadastro.module.css';
import {
    Container,
    Box,
    Typography,
    TextField,
    Button,
    Grid,
    MenuItem,
    Link,
} from '@mui/material';

const Cadastro = () => {
    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        dataNascimento: '',
        sexo: '',
        email: '',
        senha: '',
        confirmarSenha: '',
        cep: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        uf: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCepBlur = async (event) => {
        const cep = event.target.value.replace(/\D/g, '');

        if (cep.length !== 8) {
            return;
        }

        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            if (data.erro) {
                alert("CEP não encontrado. Por favor, verifique.");
                return;
            }

            setFormData({
                ...formData,
                logradouro: data.logradouro,
                bairro: data.bairro,
                cidade: data.localidade,
                uf: data.uf,
            });

        } catch (error) {
            console.error("Erro ao buscar CEP:", error);
            alert("Não foi possível buscar o CEP. Tente novamente.");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formData.senha !== formData.confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        console.log("Dados do formulário:", formData);
        alert("Cadastro enviado! Verifique o console (F12) para ver os dados.");
    };

    return (
        <div className={styles.root}>
            <Container component="main" maxWidth="md">
                <Box className={styles.cadastroBox}>
                    <Typography component="h1" variant="h5" className={styles.title}>
                        Crie sua Conta
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate>
                        <Grid container spacing={2}>
                            {/* --- DADOS PESSOAIS --- */}
                            <Grid item xs={12}>
                                <TextField name="nome" required fullWidth id="nome" label="Nome Completo" autoFocus value={formData.nome} onChange={handleChange} />
                            </Grid>

                            <Box className={styles.fieldsRow}>
                                <TextField name="cpf" required fullWidth id="cpf" label="CPF" margin="normal" value={formData.cpf} onChange={handleChange} />
                                <TextField name="dataNascimento" required fullWidth id="dataNascimento" label="Data de Nascimento" type="date" InputLabelProps={{ shrink: true }} margin="normal" value={formData.dataNascimento} onChange={handleChange} />
                                <TextField select label="Sexo" required fullWidth id="sexo" name="sexo" margin="normal" value={formData.sexo} onChange={handleChange}>
                                    <MenuItem value="masculino">Masculino</MenuItem>
                                    <MenuItem value="feminino">Feminino</MenuItem>
                                    <MenuItem value="outro">Outro</MenuItem>
                                </TextField>
                            </Box>

                            <Grid item xs={12}>
                                <TextField name="email" required fullWidth id="email" label="E-mail" autoComplete='email' value={formData.email} onChange={handleChange} />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField name="senha" required fullWidth id="senha" label="Senha" type="password" value={formData.senha} onChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField name="confirmarSenha" required fullWidth id="confirmarSenha" label="Confirmar Senha" type="password" value={formData.confirmarSenha} onChange={handleChange} />
                            </Grid>

                            {/* --- ENDEREÇO (AGORA AGRUPADO CORRETAMENTE) --- */}
                            <Grid item xs={12}>
                                <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                                    Endereço
                                </Typography>
                                {/* Grid aninhado para organizar apenas os campos de endereço */}
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField name="cep" required fullWidth id="cep" label="CEP" value={formData.cep} onChange={handleChange} onBlur={handleCepBlur} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField name="logradouro" required fullWidth id="logradouro" label="Logradouro" value={formData.logradouro} onChange={handleChange} />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField name="numero" required fullWidth id="numero" label="Número" value={formData.numero} onChange={handleChange} />
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <TextField name="complemento" fullWidth id="complemento" label="Complemento" value={formData.complemento} onChange={handleChange} />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField name="bairro" required fullWidth id="bairro" label="Bairro" value={formData.bairro} onChange={handleChange} />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField name="cidade" required fullWidth id="cidade" label="Cidade" value={formData.cidade} onChange={handleChange} />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField name="uf" required fullWidth id="uf" label="Estado (UF)" value={formData.uf} onChange={handleChange} />
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>

                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Cadastrar
                        </Button>

                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/" variant="body2">
                                    Já tem uma conta? Entre
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default Cadastro;