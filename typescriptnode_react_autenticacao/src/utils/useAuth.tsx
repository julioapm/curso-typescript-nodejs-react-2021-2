import React from 'react';

interface AuthContextType {
    authed: boolean;
    login(): Promise<void>;
    logout(): Promise<void>;
}

const authContext = React.createContext<AuthContextType>(null!);

function useAuth() {
    const [authed, setAuthed] = React.useState(false);
    return {
        authed,
        login() {
            //Implementar uma requisição para o servidor de autenticação
            return new Promise<void>((res) => {
                setAuthed(true);
                res();
            });
        },
        logout() {
            //Implementar uma requisição para o servidor de autenticação
            return new Promise<void>((res) => {
                setAuthed(false);
                res();
            });
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