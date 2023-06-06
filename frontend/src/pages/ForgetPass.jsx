import React, { useState } from "react";

function ForgetPass() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail("");
  };

  return (
    <div className="formulaire">
      <h2>Récupération du mot de passe</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default ForgetPass;
