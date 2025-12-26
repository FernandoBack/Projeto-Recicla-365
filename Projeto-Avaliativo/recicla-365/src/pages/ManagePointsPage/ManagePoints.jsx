import { useState, useEffect } from 'react';
import { Box, Typography, Button, Paper, Alert, Snackbar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CollectionPointList from '../../components/organisms/CollectionPointList/CollectionPointList';
import PointFormModal from '../../components/organisms/PointFormModal/PointFormModal';
import styles from './ManagePoints.module.css';

const ManagePoints = () => {
    const [points, setPoints] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingPoint, setEditingPoint] = useState(null);
    
    // Estados para feedback visual (Sucesso/Erro)
    const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });

    // Função auxiliar para pegar o token
    const getAuthHeaders = () => {
        const token = localStorage.getItem('token_jwt');
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        };
    };

    // 1. CARREGAR (GET)
    const loadPoints = async () => {
        try {
            const response = await fetch('http://localhost:8080/pontos-coleta', {
                method: 'GET',
                headers: getAuthHeaders()
            });

            if (response.ok) {
                const data = await response.json();
                setPoints(data);
            } else {
                console.error("Erro ao carregar pontos:", response.status);
            }
        } catch (error) {
            console.error("Erro de conexão:", error);
        }
    };

    useEffect(() => { loadPoints(); }, []);

    const handleOpenAddModal = () => {
        setEditingPoint(null);
        setIsModalOpen(true);
    };

    const handleEdit = (point) => {
        setEditingPoint(point);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingPoint(null);
    };

    // 2. SALVAR (POST ou PUT)
    const handleSave = async (formData) => {
        try {
            // Estrutura do objeto igual ao DTO do Java (PontoColetaDTO)
            const payload = {
                nome: formData.nome,
                descricao: formData.descricao,
                endereco: {
                    cep: formData.cep,
                    logradouro: formData.logradouro,
                    numero: formData.numero,
                    bairro: formData.bairro,
                    cidade: formData.cidade,
                    uf: formData.uf
                },
                tiposResiduos: formData.tiposResiduos
            };

            let response;
            if (editingPoint) {
                // ATUALIZAR (PUT)
                response = await fetch(`http://localhost:8080/pontos-coleta/${editingPoint.id}`, {
                    method: 'PUT',
                    headers: getAuthHeaders(),
                    body: JSON.stringify(payload)
                });
            } else {
                // CRIAR (POST)
                response = await fetch('http://localhost:8080/pontos-coleta', {
                    method: 'POST',
                    headers: getAuthHeaders(),
                    body: JSON.stringify(payload)
                });
            }

            if (response.ok) {
                loadPoints(); // Recarrega a lista do banco
                handleCloseModal();
                setNotification({ open: true, message: 'Operação realizada com sucesso!', severity: 'success' });
            } else {
                setNotification({ open: true, message: 'Erro ao salvar dados.', severity: 'error' });
            }
        } catch (error) {
            console.error("Erro ao salvar:", error);
            setNotification({ open: true, message: 'Erro de conexão com o servidor.', severity: 'error' });
        }
    };

    // 3. EXCLUIR (DELETE)
    const handleDelete = async (pointId) => {
        if (window.confirm("Tem certeza que deseja excluir este ponto de coleta?")) {
            try {
                const response = await fetch(`http://localhost:8080/pontos-coleta/${pointId}`, {
                    method: 'DELETE',
                    headers: getAuthHeaders()
                });

                if (response.ok || response.status === 204) {
                    loadPoints();
                    setNotification({ open: true, message: 'Ponto excluído com sucesso.', severity: 'success' });
                } else {
                    alert('Erro ao excluir ponto.');
                }
            } catch (error) {
                console.error("Erro ao excluir:", error);
            }
        }
    };

    return (
        <div className={styles.pageContainer}>
            <Paper elevation={3} className={styles.contentPaper}>
                <Box className={styles.headerBox}>
                    <Typography variant="h4" component="h1">
                        Gerenciar Pontos de Coleta
                    </Typography>
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={handleOpenAddModal}
                    >
                        Adicionar Novo Local
                    </Button>
                </Box>

                <CollectionPointList
                    points={points}
                    showActions={true}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            </Paper>

            <PointFormModal
                open={isModalOpen}
                onClose={handleCloseModal}
                onSave={handleSave}
                initialData={editingPoint}
            />

            {/* Feedback Visual */}
            <Snackbar 
                open={notification.open} 
                autoHideDuration={6000} 
                onClose={() => setNotification({ ...notification, open: false })}
            >
                <Alert severity={notification.severity} sx={{ width: '100%' }}>
                    {notification.message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default ManagePoints;