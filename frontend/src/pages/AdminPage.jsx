import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { AiFillFileAdd, AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

function AdminPage() {
  const [message, setMessage] = useState("");

  const accueil = () => {
    setMessage("Accueil");
  };

  return (
    <>
      <h1>Page administrateur</h1>
      <div className="buttonNav">
        <button type="button" onClick={accueil}>
          <AiFillHome size={50} color="black" /> Accueil
        </button>
        <Link to="/addvideos" className="linkButton">
          <AiFillFileAdd size={50} color="black" /> Ajouter une vidéo
        </Link>
        <Link to="/editvideos" className="linkButton">
          <FaEdit size={50} color="black" /> Modifier une vidéo
        </Link>
        <Link to="/deletevideos" className="linkButton">
          <FaTrash size={50} color="black" /> Supprimer des vidéos
        </Link>
      </div>

      {message && <p>{message}</p>}
    </>
  );
}

export default AdminPage;
