import React from 'react';
import * as api from '../services/fakeapi';

interface AuthContextType {
    authed: boolean; //indica se o usuário está autenticado
    user: {name: string, email: string} | null; //Substituir por um objeto que modela usuário
    login(user: object): Promise<void>;
    logout(): Promise<void>;
}

const authContext = React.createContext<AuthContextType>(null!);

function useAuth() {
    const [authed, setAuthed] = React.useState(false);
    const [user, setUser] = React.useState<{name: string, email: string} | null>(null);

    return {
        authed,
        user,
        async login(user: object) { //substituir por uma implementação de login usando backend
            const response = await api.autenticar('http://localhost:3000', user);
            setAuthed(true);
            setUser(response.data.user);
        },
        async logout() { //substituir por uma implementação de logout usando backend
            setAuthed(false);
            setUser(null);
        }
    };
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const auth = useAuth();

    return (
        <authContext.Provider value={auth} >
            {children}
        </authContext.Provider>
    );
}

export default function AuthConsumer() {
    return React.useContext(authContext);
}