import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import styles from './CollectionPointList.module.css';

const CollectionPointList = ({ points }) => {
    return (
        <div className={styles.container}>
            <Typography variant="h5" component="h2" gutterBottom>Pontos de Coleta</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome do Local</TableCell>
                            <TableCell>Endereço</TableCell>
                            <TableCell>Tipos de Resíduos</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {points.map((point) => (
                            <TableRow key={point.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">{point.nome}</TableCell>
                                <TableCell>{`${point.endereco.logradouro}, ${point.endereco.numero} - ${point.endereco.bairro}, ${point.endereco.cidade}`}</TableCell>
                                <TableCell>{point.tiposResiduos.join(', ')}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
export default CollectionPointList;