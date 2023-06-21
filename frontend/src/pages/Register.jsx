import React, { useState } from "react";
import "../App.css";

function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mail, setMail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construire l'objet utilisateur à envoyer à l'API
    const user = {
      name,
      password,
      confirmPassword,
      mail,
    };

    try {
      // Envoyer la requête POST à votre API backend pour enregistrer l'utilisateur
      const response = await fetch("http://localhost:5001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        // Réinitialiser les champs du formulaire si l'enregistrement est réussi
        setName("");
        setPassword("");
        setConfirmPassword("");
        setMail("");
        alert("Enregistrement réussi !");
      } else {
        // Afficher une alerte en cas d'erreur lors de l'enregistrement
        alert("Erreur lors de l'enregistrement.");
      }
    } catch (error) {
      console.error(error);
      // Afficher une alerte en cas d'erreur lors de la requête
      alert("Une erreur s'est produite. Veuillez réessayer plus tard.");
    }
  };

  return (
    <div className="header-form">
      <h2>Formulaire d'enregistrement</h2>
      <div className="formulaire">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nom d'utilisateur:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="password">Mot de passe:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="confirm_password">
            Confirmation du mot de passe:
          </label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>

          <input
            type="mail"
            id="mail"
            name="mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            required
          />

          <input type="submit" className="login" value="S'inscrire" />
        </form>
      </div>
    </div>
  );
}

export default Register;
