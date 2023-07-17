import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { AiFillFileAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../App.css";

function AdminPage() {
  return (
    <>
      <h1 className="adminTitle">Page administrateur</h1>
      <div className="buttonNav">
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
    </>
  );
}

export default AdminPage;
