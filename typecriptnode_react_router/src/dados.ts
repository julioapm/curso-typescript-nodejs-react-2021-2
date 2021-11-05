export const UUID = (): string => {
    let result = '';
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 12; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export interface Usuario {
    id: string;
    nome: string;
    email: string;
}

let usuarios: Usuario[] = [
    {  id: 'u1', nome: 'João', email: 'joao@gmail.com' },
    {  id: 'u2', nome: 'Maria', email: 'maria@gmail.com' },
    {  id: 'u3', nome: 'José', email: 'jose@gmail.com' }
];

export function getUsuarios() {
    return usuarios;
}

export function getUsuario(id: string) {
    return usuarios.find(u => u.id === id);
}

export function deleteUsuario(id: string) {
    usuarios = usuarios.filter(u => u.id !== id);
}