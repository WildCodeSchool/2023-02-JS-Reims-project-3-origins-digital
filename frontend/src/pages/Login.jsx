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
      <div className="Formulaire">
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
        <Link to="/inscription">
          <button type="button">Inscription</button>
        </Link>
        <Link to="/forgetpass">
          <button type="submit">Mot de passe oublié ? </button>
        </Link>
      </div>
    </form>
  );
}

export default Login;
