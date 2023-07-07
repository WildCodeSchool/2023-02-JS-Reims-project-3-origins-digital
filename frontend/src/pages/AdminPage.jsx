import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { LuEdit } from "react-icons/lu";
import { AiFillFileAdd, AiFillHome } from "react-icons/ai";
import DeleteVideo from "../components/DeleteVideo";

function AdminPage() {
  const [message, setMessage] = useState("");

  const accueil = () => {
    setMessage("Accueil");
  };

  const addVideo = () => {
    setMessage("Vidéo ajoutée !");
  };

  const deleteVideo = () => {
    setMessage("Vidéo supprimée !");
  };

  const editVideo = () => {
    // Code pour modifier une vidéo
    setMessage("Vidéo modifiée !");
  };

  return (
    <>
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
          <FaTrash size={50} color="black" /> <DeleteVideo />;
        </button>
      </div>

      {message && <p>{message}</p>}
    </>
  );
}

export default AdminPage;
