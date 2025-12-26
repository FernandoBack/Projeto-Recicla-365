import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Ao carregar a página, verifica se já tem token salvo para manter logado
    useEffect(() => {
        const token = localStorage.getItem('token_jwt');
        const savedUser = localStorage.getItem('user_email');
        if (token && savedUser) {
            setUser({ email: savedUser });
        }
    }, []);

    const login = async (email, password) => {
        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // O Back espera { email, senha }, mas a função recebe password. Ajustamos aqui:
                body: JSON.stringify({ email: email, senha: password }) 
            });

            if (response.ok) {
                const data = await response.json();
                
                // Salva o token real vindo do Java
                localStorage.setItem('token_jwt', data.token);
                localStorage.setItem('user_email', email);
                
                setUser({ email }); 
                return true;
            } else {
                console.error("Falha no login: Credenciais inválidas");
                return false;
            }
        } catch (error) {
            console.error("Erro de conexão com o servidor", error);
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem('token_jwt');
        localStorage.removeItem('user_email');
        setUser(null);
    };

    const value = { user, login, logout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
};