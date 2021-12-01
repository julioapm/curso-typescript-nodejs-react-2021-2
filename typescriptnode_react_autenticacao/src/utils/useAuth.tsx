import React from 'react';
import * as api from '../services/fakeapi';

interface AuthContextType {
    authed: boolean; //indica se o usuário está autenticado
    user: {name: string, email: string} | null; //Substituir por um objeto que modela usuário
    login(user: object): Promise<void>;
    relogin(): void;
    logout(): Promise<void>;
}

const authContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [authed, setAuthed] = React.useState(false);
    const [user, setUser] = React.useState<{name: string, email: string} | null>(null);
    const auth = useAuth();

    React.useEffect(() => {
        //podemos ler dados do storage (localStorage, sessionStorage) ou de cookies
        const user = sessionStorage.getItem('@App:user');
        const token = sessionStorage.getItem('@App:token');
        if (user && token) {
            setAuthed(true);
            setUser(JSON.parse(user));
        }
    }, []);

    function useAuth() {
        return {
            authed,
            user,
            async login(user: object) { //substituir por uma implementação de login usando backend
                const response = await api.autenticar('http://localhost:3000', user);
                setAuthed(true);
                setUser(response.data.user);
                //podemos armazenar dados no storage (localStorage, sessionStorage) ou em cookies
                sessionStorage.setItem('@App:user', JSON.stringify(response.data.user));
                sessionStorage.setItem('@App:token', response.data.token);
            },
            relogin() {
    
            },
            async logout() { //substituir por uma implementação de logout usando backend
                setAuthed(false);
                setUser(null);
                //podemos armazenar dados no storage (localStorage, sessionStorage) ou em cookies
                sessionStorage.removeItem('@App:user');
                sessionStorage.removeItem('@App:token');
            }
        };
    }

    return (
        <authContext.Provider value={auth} >
            {children}
        </authContext.Provider>
    );
}

export default function AuthConsumer() {
    return React.useContext(authContext);
}