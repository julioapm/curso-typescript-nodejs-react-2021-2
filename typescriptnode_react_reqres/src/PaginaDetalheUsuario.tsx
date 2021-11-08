import { useParams, useNavigate } from 'react-router-dom';
import { getUsuario, deleteUsuario } from './dados';

export default function PaginaDetalheUsuario() {
    let parametros = useParams();
    let usuario = getUsuario(12);
    let navigate = useNavigate();
    return (
        <>
            <p>Nome: {usuario?.first_name}</p>
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