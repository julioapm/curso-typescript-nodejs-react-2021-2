import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../utils/useAuth";

export default function RequireAuth({ children }: { children: JSX.Element }) {
    const { authed } = useAuth();
    const location = useLocation();

    return authed === true ? (
        children
    ) : (
        <Navigate to="/login" replace state={{ path: location.pathname }} />
    );
}