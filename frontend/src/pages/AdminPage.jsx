import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { LuEdit } from "react-icons/lu";
import { AiFillFileAdd, AiFillHome } from "react-icons/ai";

function AdminPage() {
  const [message, setMessage] = useState("");

  const accueil = () => {
    setMessage("Accueil");
  };

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
      <h1>Page administateur</h1>
      <div className="buttonNav">
        <button type="button" onClick={accueil}>
          <AiFillHome size={50} color="black" /> Accueil
        </button>
        <button type="button" onClick={addVideo}>
          <AiFillFileAdd size={50} color="black" /> Ajouté
        </button>
        <button type="button" onClick={editVideo}>
          <LuEdit size={50} color="black" /> Modifié
        </button>
        <button type="button" onClick={deleteVideo}>
          <FaTrash size={50} color="black" /> Supprimé
        </button>
      </div>

      {message && <p>{message}</p>}
    </div>
  );
}

export default AdminPage;
