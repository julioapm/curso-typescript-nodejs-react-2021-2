import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../utils/useAuth';

export default function NavBar() {
    const { authed, logout } = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate('/');
    };
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/public">Public</Link>
                </li>
                <li>
                    <Link to="/protected">Protected</Link>
                </li>
            </ul>
            {authed && (
                <button onClick={handleLogout}>Logout</button>
            )}
        </nav>
    );
}