import { Link, Outlet } from 'react-router-dom';
import { getUsuarios } from './dados';

export default function PaginaUsuarios() {
    let usuarios = getUsuarios();
    return (
        <>
            <nav>
                {usuarios.map(usuario => (
                    <Link
                        key={usuario.id}
                        to={`/usuarios/${usuario.id}`}
                        style={{ display: 'block', margin: '1rem 0' }}
                    >
                        {usuario.nome}
                    </Link>
                ))}
            </nav>
            <Outlet />
        </>
    );
}