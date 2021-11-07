import { useParams, useNavigate } from 'react-router-dom';
import { getUsuario, deleteUsuario } from './dados';

export default function PaginaDetalheUsuario() {
    let parametros = useParams();
    let usuario = getUsuario(parametros.usuarioId!);
    let navigate = useNavigate();
    return (
        <>
            <p>Nome: {usuario?.nome}</p>
            <p>Email: {usuario?.email}</p>
            <p>
                <button onClick={() => {
                    deleteUsuario(usuario!.id);
                    navigate('/usuarios');
                }}>
                    Remover
                </button>
            </p>
        </>
    );
}