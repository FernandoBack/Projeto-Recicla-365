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
    Autocomplete,
    Chip
} from '@mui/material';
import styles from './PointFormModal.module.css';

const tiposDeResiduosDisponiveis = [
    'Vidro', 'Metal', 'Papel', 'Plástico', 'Orgânico',
    'Baterias', 'Eletrônicos', 'Óleo de Cozinha', 'Pneus',
];

const PointFormModal = ({ open, onClose, onSave, initialData = null }) => {
    const [formData, setFormData] = useState({
        nome: '', descricao: '', cep: '', logradouro: '', numero: '',
        bairro: '', cidade: '', uf: '', tiposResiduos: [],
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
                tiposResiduos: Array.isArray(initialData.tiposResiduos) ? initialData.tiposResiduos : [],
            });
        } else {
            setFormData({
                nome: '', descricao: '', cep: '', logradouro: '', numero: '',
                bairro: '', cidade: '', uf: '', tiposResiduos: [],
            });
        }
    }, [initialData, open]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleResiduosChange = (event, newValue) => {
        setFormData(prev => ({ ...prev, tiposResiduos: newValue }));
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

    const handleSave = () => {
        if (!formData.nome || !formData.cep || !formData.numero || formData.tiposResiduos.length === 0) {
            alert('Nome, CEP, Número e ao menos um Tipo de Resíduo são obrigatórios.');
            return;
        }
        onSave(formData);
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg">
            <DialogTitle>{initialData ? 'Editar Ponto de Coleta' : 'Adicionar Novo Ponto de Coleta'}</DialogTitle>
            <DialogContent>

                <DialogContentText className={styles.dialogDescription}>
                    Preencha as informações abaixo para cadastrar ou atualizar um ponto de coleta.
                </DialogContentText>

                <Grid container spacing={2} className={styles.formGridContainer}>
                    <Grid item xs={12} sm={6}><TextField name="nome" label="Nome do Local" fullWidth value={formData.nome} onChange={handleChange} /></Grid>
                    <Grid item xs={12} sm={6}><TextField name="descricao" label="Descrição" fullWidth value={formData.descricao} onChange={handleChange} /></Grid>
                    <Grid item xs={12} sm={4}><TextField name="cep" label="CEP" fullWidth value={formData.cep} onChange={handleChange} onBlur={handleCepBlur} /></Grid>
                    <Grid item xs={12} sm={8}><TextField name="logradouro" label="Logradouro" fullWidth value={formData.logradouro} onChange={handleChange} /></Grid>
                    <Grid item xs={12} sm={4}><TextField name="numero" label="Número" fullWidth value={formData.numero} onChange={handleChange} /></Grid>
                    <Grid item xs={12} sm={8}><TextField name="bairro" label="Bairro" fullWidth value={formData.bairro} onChange={handleChange} /></Grid>
                    <Grid item xs={12} sm={6}><TextField name="cidade" label="Cidade" fullWidth value={formData.cidade} onChange={handleChange} /></Grid>
                    <Grid item xs={12} sm={6}><TextField name="uf" label="UF" fullWidth value={formData.uf} onChange={handleChange} /></Grid>
                    <Grid item xs={12}>
                        <Autocomplete
                            multiple
                            id="tipos-residuos-select"
                            options={tiposDeResiduosDisponiveis}
                            value={formData.tiposResiduos}
                            onChange={handleResiduosChange}
                            renderTags={(value, getTagProps) =>
                                value.map((option, index) => (
                                    <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                                ))
                            }
                            renderInput={(params) => (
                                <TextField {...params} variant="outlined" label="Tipos de Resíduos Aceitos" placeholder="Selecione um ou mais tipos" />
                            )}
                        />
                    </Grid>
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