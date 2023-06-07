import React from "react";
import { useParams } from "react-router-dom";

function CategoryPage() {
  const { categoryName } = useParams();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{categoryName} </h1>
      <p>Videos Soon...stay Connected</p>
    </div>
  );
}

export default CategoryPage;
