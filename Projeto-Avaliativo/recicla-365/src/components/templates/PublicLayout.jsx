import Header from '../organisms/Header/Header';
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
    return (
        <div>
            <Header />
            <main><Outlet /></main>
        </div>
    );
};
export default PublicLayout;