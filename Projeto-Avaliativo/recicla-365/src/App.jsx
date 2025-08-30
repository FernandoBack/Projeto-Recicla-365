import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage/Login.jsx";
import Cadastro from "./pages/CadastroUsuarioPage/Cadastro.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;
