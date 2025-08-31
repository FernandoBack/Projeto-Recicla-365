import { useState, useEffect } from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    Button,
    Grid,
} from '@mui/material';


const PointFormModal = ({ open, onClose, onSave, initialData = null }) => {
    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        cep: '',
        logradouro: '',
        numero: '',
        bairro: '',
        cidade: '',
        uf: '',
        tiposResiduos: '',
    });


    useEffect(() => {
        if (initialData) {
            setFormData({
                nome: initialData.nome,
                descricao: initialData.descricao,
                cep: initialData.endereco.cep,
                logradouro: initialData.endereco.logradouro,
                numero: initialData.endereco.numero,
                bairro: initialData.endereco.bairro,
                cidade: initialData.endereco.cidade,
                uf: initialData.endereco.uf,
                tiposResiduos: initialData.tiposResiduos.join(', '),
            });
        } else {
            // Limpa o formulário se estiver em modo de adição
            setFormData({
                nome: '', descricao: '', cep: '', logradouro: '', numero: '',
                bairro: '', cidade: '', uf: '', tiposResiduos: '',
            });
        }
    }, [initialData, open]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        // Validação simples
        if (!formData.nome || !formData.cep || !formData.numero) {
            alert('Nome, CEP e Número são obrigatórios.');
            return;
        }
        onSave(formData);
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{initialData ? 'Editar Ponto de Coleta' : 'Adicionar Novo Ponto de Coleta'}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Preencha as informações abaixo para cadastrar ou atualizar um ponto de coleta.
                </DialogContentText>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid item xs={12}><TextField name="nome" label="Nome do Local" fullWidth value={formData.nome} onChange={handleChange} /></Grid>
                    <Grid item xs={12}><TextField name="descricao" label="Descrição" fullWidth value={formData.descricao} onChange={handleChange} /></Grid>
                    <Grid item xs={12} sm={6}><TextField name="cep" label="CEP" fullWidth value={formData.cep} onChange={handleChange} /></Grid>
                    <Grid item xs={12} sm={6}><TextField name="logradouro" label="Logradouro" fullWidth value={formData.logradouro} onChange={handleChange} /></Grid>
                    <Grid item xs={12} sm={4}><TextField name="numero" label="Número" fullWidth value={formData.numero} onChange={handleChange} /></Grid>
                    <Grid item xs={12} sm={8}><TextField name="bairro" label="Bairro" fullWidth value={formData.bairro} onChange={handleChange} /></Grid>
                    <Grid item xs={12} sm={6}><TextField name="cidade" label="Cidade" fullWidth value={formData.cidade} onChange={handleChange} /></Grid>
                    <Grid item xs={12} sm={6}><TextField name="uf" label="UF" fullWidth value={formData.uf} onChange={handleChange} /></Grid>
                    <Grid item xs={12}><TextField name="tiposResiduos" label="Tipos de Resíduos (separados por vírgula)" fullWidth value={formData.tiposResiduos} onChange={handleChange} /></Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancelar</Button>
                <Button onClick={handleSave} variant="contained">Salvar</Button>
            </DialogActions>
        </Dialog>
    );
};

export default PointFormModal;