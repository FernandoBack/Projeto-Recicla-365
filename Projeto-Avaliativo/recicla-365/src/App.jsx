import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Login from './pages/LoginPage/Login';
import Cadastro from './pages/CadastroUsuarioPage/Cadastro';
import Dashboard from './pages/DashboardPage/Dashboard';
import ManagePoints from './pages/ManagePointsPage/ManagePoints';

// Components & Templates
import ProtectedRoute from './components/auth/ProtectedRoute/ProtectedRoute';
import MainLayout from './components/templates/MainLayout/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />


          <Route
            path="/dashboard"
            element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
          />
          <Route
            path="/dashboard/locais"
            element={<ProtectedRoute><ManagePoints /></ProtectedRoute>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;