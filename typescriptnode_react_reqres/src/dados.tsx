export interface Usuario {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}
let usuarios: Usuario[];

export function getUsuarios() {
    return usuarios;
}

export function getUsuario(id: number) {
    return usuarios.find(u => u.id === id);
}

export function deleteUsuario(id: number) {
    usuarios = usuarios.filter(u => u.id !== id);
}

async function setUsuarios  () {
    const url = 'https://reqres.in/api/users?page=2';
    const resultado =  await fetch(url);
    usuarios =  await resultado.json();
  }
 setUsuarios();