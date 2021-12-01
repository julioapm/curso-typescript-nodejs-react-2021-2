import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../utils/useAuth';

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const { state } = useLocation();
    const handleLogin = async () => {
        await login();
        navigate(state.path || '/protected');
    };
    //Aqui seria implementado o formulário de login
    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}