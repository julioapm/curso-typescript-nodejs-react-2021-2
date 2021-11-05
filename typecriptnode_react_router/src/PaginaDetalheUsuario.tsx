import { useParams } from 'react-router-dom';
import { getUsuario } from './dados';

export default function PaginaDetalheUsuario() {
    let parametros = useParams();
    let usuario = getUsuario(parametros.usuarioId!);
    return (
        <>
            <p>Nome: {usuario?.nome}</p>
            <p>Email: {usuario?.email}</p>
        </>
    );
}
