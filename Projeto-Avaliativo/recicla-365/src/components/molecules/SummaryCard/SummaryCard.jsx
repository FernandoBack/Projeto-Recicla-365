import { Card, CardContent, Typography, Box } from '@mui/material';
import styles from './SummaryCard.module.css';

const SummaryCard = ({ icon, title, value }) => {
    return (
        <Card className={styles.card}>
            <CardContent className={styles.cardContent}>
                <Box className={styles.iconBox}>{icon}</Box>
                <Box>
                    <Typography variant="h5" component="div" className={styles.value}>{value}</Typography>
                    <Typography color="text.secondary" className={styles.title}>{title}</Typography>
                </Box>
            </CardContent>
        </Card>
    );
};
export default SummaryCard;