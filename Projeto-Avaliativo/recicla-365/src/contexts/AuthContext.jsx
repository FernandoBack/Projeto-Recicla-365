import { createContext, useState, useContext } from 'react';


const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        const usersData = JSON.parse(localStorage.getItem('recicla365_users')) || [];

        const userFound = usersData.find(
            (u) => u.email === email && u.senha === password
        );

        if (userFound) {
            setUser(userFound);
            console.log("Usuário logado:", userFound);
            return true;
        }

        console.log("Falha no login");
        return false;
    };

    const logout = () => {
        setUser(null);
        console.log("Usuário deslogado");
    };

    const value = {
        user,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
};