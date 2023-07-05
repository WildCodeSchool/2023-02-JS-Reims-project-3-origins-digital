import React, { useState } from "react";

function AdminPage() {
  const [message, setMessage] = useState("");

  const ajouterVideo = () => {
    // Code pour ajouter une vidéo
    setMessage("Vidéo ajoutée !");
  };

  const supprimerVideo = () => {
    // Code pour supprimer une vidéo
    setMessage("Vidéo supprimée !");
  };

  const modifierVideo = () => {
    // Code pour modifier une vidéo
    setMessage("Vidéo modifiée !");
  };

  return (
    <div>
      <h1>Page d'administration</h1>

      <button type="button" onClick={ajouterVideo}>
        Ajouter une vidéo
      </button>
      <button type="button" onClick={supprimerVideo}>
        Supprimer une vidéo
      </button>
      <button type="button" onClick={modifierVideo}>
        Modifier une vidéo
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default AdminPage;
