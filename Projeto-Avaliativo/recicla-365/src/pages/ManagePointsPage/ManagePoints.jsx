// src/pages/ManagePointsPage/ManagePoints.jsx

import { useState, useEffect } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CollectionPointList from '../../components/organisms/CollectionPointList/CollectionPointList';
import PointFormModal from '../../components/organisms/PointFormModal/PointFormModal';

const ManagePoints = () => {
    const [points, setPoints] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingPoint, setEditingPoint] = useState(null);

    const loadPoints = () => {
        const pointsData = JSON.parse(localStorage.getItem('recicla365_collection_points')) || [];
        setPoints(pointsData);
    };

    useEffect(() => {
        loadPoints();
    }, []);

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
        const tiposResiduosArray = formData.tiposResiduos.split(',').map(item => item.trim());

        if (editingPoint) {
            const updatedPoints = allPoints.map(p =>
                p.id === editingPoint.id
                    ? {
                        ...editingPoint,
                        nome: formData.nome,
                        descricao: formData.descricao,
                        endereco: { cep: formData.cep, logradouro: formData.logradouro, numero: formData.numero, bairro: formData.bairro, cidade: formData.cidade, uf: formData.uf },
                        tiposResiduos: tiposResiduosArray
                    }
                    : p
            );
            localStorage.setItem('recicla365_collection_points', JSON.stringify(updatedPoints));
        } else {
            const lastId = allPoints.length > 0 ? allPoints[allPoints.length - 1].id : 0;
            const newPoint = {
                id: lastId + 1,
                nome: formData.nome,
                descricao: formData.descricao,
                endereco: { cep: formData.cep, logradouro: formData.logradouro, numero: formData.numero, bairro: formData.bairro, cidade: formData.cidade, uf: formData.uf },
                coordenadas: { latitude: 0, longitude: 0 },
                tiposResiduos: tiposResiduosArray
            };
            const newPointsArray = [...allPoints, newPoint];
            localStorage.setItem('recicla365_collection_points', JSON.stringify(newPointsArray));
        }

        loadPoints();
        handleCloseModal();
    };

    const handleDelete = (pointId) => {
        console.log("Excluir ponto com ID:", pointId);
    };

    return (
        <Container maxWidth="lg">
            <Box sx={{ my: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                    <Typography variant="h4" component="h1">
                        Gerenciar Pontos de Coleta
                    </Typography>
                    <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpenAddModal}>
                        Adicionar Novo Local
                    </Button>
                </Box>


                <CollectionPointList
                    points={points}
                    showActions={true}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />

                <PointFormModal
                    open={isModalOpen}
                    onClose={handleCloseModal}
                    onSave={handleSave}
                    initialData={editingPoint}
                />
            </Box>
        </Container>
    );
};

export default ManagePoints;