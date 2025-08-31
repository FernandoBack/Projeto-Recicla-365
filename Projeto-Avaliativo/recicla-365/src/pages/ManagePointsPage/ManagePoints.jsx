import { useState, useEffect } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CollectionPointList from '../../components/organisms/CollectionPointList/CollectionPointList';
import PointFormModal from '../../components/organisms/PointFormModal/PointFormModal';
import styles from './ManagePoints.module.css';

const ManagePoints = () => {
    const [points, setPoints] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingPoint, setEditingPoint] = useState(null);

    const loadPoints = () => {
        const pointsData = JSON.parse(localStorage.getItem('recicla365_collection_points')) || [];
        setPoints(pointsData);
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

    const handleSave = (formData) => {
        const allPoints = JSON.parse(localStorage.getItem('recicla365_collection_points')) || [];
        if (editingPoint) {
            const updatedPoints = allPoints.map(p => p.id === editingPoint.id ? { ...editingPoint, nome: formData.nome, descricao: formData.descricao, endereco: { cep: formData.cep, logradouro: formData.logradouro, numero: formData.numero, bairro: formData.bairro, cidade: formData.cidade, uf: formData.uf }, tiposResiduos: formData.tiposResiduos } : p);
            localStorage.setItem('recicla365_collection_points', JSON.stringify(updatedPoints));
        } else {
            const lastId = allPoints.length > 0 ? allPoints[allPoints.length - 1].id : 0;
            const newPoint = { id: lastId + 1, nome: formData.nome, descricao: formData.descricao, endereco: { cep: formData.cep, logradouro: formData.logradouro, numero: formData.numero, bairro: formData.bairro, cidade: formData.cidade, uf: formData.uf }, coordenadas: { latitude: 0, longitude: 0 }, tiposResiduos: formData.tiposResiduos };
            const newPointsArray = [...allPoints, newPoint];
            localStorage.setItem('recicla365_collection_points', JSON.stringify(newPointsArray));
        }
        loadPoints();
        handleCloseModal();
    };

    const handleDelete = (pointId) => {
        if (window.confirm("Tem certeza que deseja excluir este ponto de coleta?")) {
            const allPoints = JSON.parse(localStorage.getItem('recicla365_collection_points')) || [];
            const updatedPoints = allPoints.filter(p => p.id !== pointId);
            localStorage.setItem('recicla365_collection_points', JSON.stringify(updatedPoints));
            loadPoints();
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
        </div>
    );
};

export default ManagePoints;