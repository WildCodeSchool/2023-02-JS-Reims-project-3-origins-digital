import React from "react";
import "../App.css";
import AdminComponents from "../components/AdminComponent";

function AdminPage() {
  return (
    <>
      <h1>Page administrateur</h1>
      <div className="buttonNav">
        <AdminComponents />
      </div>
    </>
  );
}

export default AdminPage;
