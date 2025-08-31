import { useState, useEffect } from 'react';
import { Button, Typography, Container, Box, Grid } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import SummaryCard from '../../components/molecules/SummaryCard/SummaryCard';
import PeopleIcon from '@mui/icons-material/People';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CollectionPointList from '../../components/organisms/CollectionPointList/CollectionPointList';
import { Link as RouterLink } from 'react-router-dom';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [summaryData, setSummaryData] = useState({ userCount: 0, pointsCount: 0 });
    const [collectionPoints, setCollectionPoints] = useState([]);

    useEffect(() => {
        const usersData = JSON.parse(localStorage.getItem('recicla365_users')) || [];
        const pointsData = JSON.parse(localStorage.getItem('recicla365_collection_points')) || [];
        setSummaryData({ userCount: usersData.length, pointsCount: pointsData.length });
        setCollectionPoints(pointsData);
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <Container maxWidth="lg">
            <Box sx={{ my: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                    <Typography variant="h4" component="h1">Dashboard</Typography>
                    <Button variant="contained" onClick={handleLogout}>Sair</Button>
                    <Button component={RouterLink} to="/dashboard/locais" variant="outlined" sx={{ mb: 4 }}>
                        Gerenciar Locais de Coleta
                    </Button>
                </Box>
                {user && (<Typography variant="h6" gutterBottom>Bem-vindo(a), {user.nome}!</Typography>)}
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}><SummaryCard title="Total de Usuários" value={summaryData.userCount} icon={<PeopleIcon sx={{ fontSize: 32 }} />} /></Grid>
                    <Grid item xs={12} sm={6} md={4}><SummaryCard title="Locais Cadastrados" value={summaryData.pointsCount} icon={<LocationOnIcon sx={{ fontSize: 32 }} />} /></Grid>
                </Grid>
                <CollectionPointList points={collectionPoints} />
            </Box>
        </Container>
    );
};
export default Dashboard;