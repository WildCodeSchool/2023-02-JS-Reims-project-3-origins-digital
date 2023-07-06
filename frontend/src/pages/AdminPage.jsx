import React, { useState } from "react";

function AdminPage() {
  const [message, setMessage] = useState("");

  const addVideo = () => {
    setMessage("Vidéo ajoutée !");
  };

  const deleteVideo = () => {
    // Code pour supprimer une vidéo
    setMessage("Vidéo supprimée !");
  };

  const editVideo = () => {
    // Code pour modifier une vidéo
    setMessage("Vidéo modifiée !");
  };

  return (
    <div>
      <h1>Page d'administration</h1>

      <button type="button" onClick={addVideo}>
        Ajouter une vidéo
      </button>
      <button type="button" onClick={deleteVideo}>
        Supprimer une vidéo
      </button>
      <button type="button" onClick={editVideo}>
        Modifier une vidéo
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default AdminPage;
