import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"

export const Private = () => {

  const auth = useContext(AuthContext);

  return (
    <div>
      <h2>Página Privada</h2>
      <h4>Olá {auth.user?.name}, tudo bem?</h4>
    </div>
  );
}
