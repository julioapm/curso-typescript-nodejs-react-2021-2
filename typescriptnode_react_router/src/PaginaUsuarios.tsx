import { Link, Outlet, useSearchParams } from "react-router-dom";
import { getUsuarios } from "./dados";

export default function PaginaUsuarios() {
  let usuarios = getUsuarios();
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <input type="search" value={searchParams.get("filtro") || "" onChange={event => {
        let filtro = event.target.value;
        if (filtro) {
          setSearchParams({ filtro });
        } else {
          setSearchParams({});
        }
      }}
      />
      <nav>
        {usuarios.map((usuario) => (
          <Link
            key={usuario.id}
            to={`/usuarios/${usuario.id}`}
            style={{ display: "block", margin: "1rem 0" }}
          >
            {usuario.nome}
          </Link>
        ))}
      </nav>
      <Outlet />
    </>
  );
}
