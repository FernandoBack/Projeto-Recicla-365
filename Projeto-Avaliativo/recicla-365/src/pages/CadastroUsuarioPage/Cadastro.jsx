import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Cadastro.module.css';
import { Container, Box, Typography, TextField, Button, Grid, MenuItem, Link } from '@mui/material';

const Cadastro = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nome: '', cpf: '', dataNascimento: '', sexo: '', email: '',
        senha: '', confirmarSenha: '', cep: '', logradouro: '',
        numero: '', complemento: '', bairro: '', cidade: '', uf: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCepBlur = async (event) => {
        const cep = event.target.value.replace(/\D/g, '');
        if (cep.length !== 8) return;
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
            if (data.erro) {
                alert("CEP não encontrado."); return;
            }
            setFormData((prevData) => ({
                ...prevData, logradouro: data.logradouro, bairro: data.bairro,
                cidade: data.localidade, uf: data.uf,
            }));
        } catch (error) {
            console.error("Erro ao buscar CEP:", error);
            alert("Não foi possível buscar o CEP.");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const requiredFields = ['nome', 'cpf', 'dataNascimento', 'sexo', 'email', 'senha', 'confirmarSenha', 'cep', 'logradouro', 'numero', 'bairro', 'cidade', 'uf'];
        for (const field of requiredFields) {
            if (!formData[field]) {
                alert(`O campo "${field}" é obrigatório.`);
                return;
            }
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert("Por favor, insira um formato de e-mail válido (ex: email@dominio.com).");
            return;
        }
        if (formData.senha !== formData.confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }
        const usersData = JSON.parse(localStorage.getItem('recicla365_users')) || [];
        const cpfExists = usersData.some(user => user.cpf === formData.cpf);
        if (cpfExists) {
            alert("Este CPF já está cadastrado.");
            return;
        }
        const { confirmarSenha, ...newUser } = formData;
        const lastUserId = usersData.length > 0 ? usersData[usersData.length - 1].id : 0;
        newUser.id = lastUserId + 1;
        const updatedUsers = [...usersData, newUser];
        localStorage.setItem('recicla365_users', JSON.stringify(updatedUsers));
        alert("Cadastro realizado com sucesso!");
        navigate('/login');
    };


    return (
        <div className={styles.root}>
            <Container component="main" maxWidth="md">
                <Box className={styles.cadastroBox}>
                    <Typography component="h1" variant="h5" className={styles.title}>
                        Crie sua Conta
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate>

                        <Box className={styles.formSection}>
                            <Typography variant="h6" className={styles.sectionTitle}>
                                Dados Pessoais
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField name="nome" required fullWidth id="nome" label="Nome Completo" autoFocus value={formData.nome} onChange={handleChange} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField name="cpf" required fullWidth id="cpf" label="CPF" value={formData.cpf} onChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField name="dataNascimento" required fullWidth id="dataNascimento" label="Data de Nascimento" type="date" InputLabelProps={{ shrink: true }} value={formData.dataNascimento} onChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField select label="Sexo" required fullWidth id="sexo" name="sexo" value={formData.sexo} onChange={handleChange}>
                                        <MenuItem value="masculino">Masculino</MenuItem>
                                        <MenuItem value="feminino">Feminino</MenuItem>
                                        <MenuItem value="outro">Outro</MenuItem>
                                    </TextField>
                                </Grid>
                            </Grid>
                        </Box>


                        <Box className={styles.formSection}>
                            <Typography variant="h6" className={styles.sectionTitle}>
                                Acesso à Conta
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}><TextField name="email" required fullWidth id="email" label="E-mail" type="email" autoComplete='email' value={formData.email} onChange={handleChange} /></Grid>
                                <Grid item xs={12} sm={6}><TextField name="senha" required fullWidth id="senha" label="Senha" type="password" autoComplete="new-password" value={formData.senha} onChange={handleChange} /></Grid>
                                <Grid item xs={12} sm={6}><TextField name="confirmarSenha" required fullWidth id="confirmarSenha" label="Confirmar Senha" type="password" value={formData.confirmarSenha} onChange={handleChange} /></Grid>
                            </Grid>
                        </Box>


                        <Box className={styles.formSection}>
                            <Typography variant="h6" className={styles.sectionTitle}>
                                Endereço
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4}><TextField name="cep" required fullWidth id="cep" label="CEP" value={formData.cep} onChange={handleChange} onBlur={handleCepBlur} /></Grid>
                                <Grid item xs={12} sm={8}><TextField name="logradouro" required fullWidth id="logradouro" label="Logradouro" value={formData.logradouro} onChange={handleChange} /></Grid>
                                <Grid item xs={12} sm={4}><TextField name="numero" required fullWidth id="numero" label="Número" value={formData.numero} onChange={handleChange} /></Grid>
                                <Grid item xs={12} sm={8}><TextField name="complemento" fullWidth id="complemento" label="Complemento" value={formData.complemento} onChange={handleChange} /></Grid>
                                <Grid item xs={12} sm={4}><TextField name="bairro" required fullWidth id="bairro" label="Bairro" value={formData.bairro} onChange={handleChange} /></Grid>
                                <Grid item xs={12} sm={4}><TextField name="cidade" required fullWidth id="cidade" label="Cidade" value={formData.cidade} onChange={handleChange} /></Grid>
                                <Grid item xs={12} sm={4}><TextField name="uf" required fullWidth id="uf" label="Estado (UF)" value={formData.uf} onChange={handleChange} /></Grid>
                            </Grid>
                        </Box>

                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Cadastrar</Button>
                        <Grid container justifyContent="flex-end"><Grid item><Link href="/login" variant="body2">Já tem uma conta? Entre</Link></Grid></Grid>
                    </Box>
                </Box>
            </Container>
        </div>
    );
};
export default Cadastro;