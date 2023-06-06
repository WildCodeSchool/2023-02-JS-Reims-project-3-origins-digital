import { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const { setToken } = useAuth();
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        fetch(
          `${
            import.meta.env.VITE_BACKEND_URL ?? "http://localhost:3000"
          }/login`,
          {
            method: "post",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              username: usernameRef.current.value,
              password: passwordRef.current.value,
            }),
          }
        )
          .then((response) => response.json())
          .then((data) => {
            setToken(data.token);

            navigate("/");
          });
      }}
    >
      <div className="formulaire">
        <label htmlFor="username">Nom d'utilisateur</label>
        <input ref={usernameRef} type="text" id="username" name="username" />
        <label htmlFor="password">Mot de passe</label>
        <input
          ref={passwordRef}
          type="password"
          id="password"
          name="password"
        />

        <button type="submit">Connexion</button>
        <Link to="/inscription">Inscription</Link>
        <Link to="/forgetpass">Mot de passe oublié ?</Link>
      </div>
    </form>
  );
}

export default Login;
