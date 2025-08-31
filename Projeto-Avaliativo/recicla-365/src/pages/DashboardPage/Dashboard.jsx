import { useState, useEffect } from 'react';
import { Typography, Container, Box, Grid, Button } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';
import { Link as RouterLink } from 'react-router-dom';
import SummaryCard from '../../components/molecules/SummaryCard/SummaryCard';
import PeopleIcon from '@mui/icons-material/People';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CollectionPointList from '../../components/organisms/CollectionPointList/CollectionPointList';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    const { user } = useAuth();
    const [summaryData, setSummaryData] = useState({ userCount: 0, pointsCount: 0 });
    const [collectionPoints, setCollectionPoints] = useState([]);


    const loadData = () => {
        const usersData = JSON.parse(localStorage.getItem('recicla365_users')) || [];
        const pointsData = JSON.parse(localStorage.getItem('recicla365_collection_points')) || [];
        setSummaryData({ userCount: usersData.length, pointsCount: pointsData.length });
        setCollectionPoints(pointsData);
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleDelete = (pointId) => {
        if (window.confirm("Tem certeza que deseja excluir este ponto de coleta?")) {
            const allPoints = JSON.parse(localStorage.getItem('recicla365_collection_points')) || [];
            const updatedPoints = allPoints.filter(p => p.id !== pointId);
            localStorage.setItem('recicla365_collection_points', JSON.stringify(updatedPoints));

            loadData();
        }
    };

    return (
        <Container maxWidth="lg">
            <Box sx={{ my: 4 }}>
                {user && (<Typography variant="h6" gutterBottom sx={{ color: '#fff', textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                    Bem-vindo(a), {user.nome}!
                </Typography>)}

                <Button
                    component={RouterLink}
                    to="/dashboard/locais"
                    variant="contained"
                    className={styles.manageButton}
                >
                    Gerenciar Locais de Coleta
                </Button>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}><SummaryCard title="Total de Usuários" value={summaryData.userCount} icon={<PeopleIcon sx={{ fontSize: 32 }} />} /></Grid>
                    <Grid item xs={12} sm={6} md={4}><SummaryCard title="Locais Cadastrados" value={summaryData.pointsCount} icon={<LocationOnIcon sx={{ fontSize: 32 }} />} /></Grid>
                </Grid>


                <CollectionPointList
                    points={collectionPoints}
                    showActions={true}
                    onDelete={handleDelete}

                />

            </Box>
        </Container>
    );
};

export default Dashboard;