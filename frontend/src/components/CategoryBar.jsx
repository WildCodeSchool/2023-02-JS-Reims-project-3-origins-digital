import React from "react";
import "./CategoryBar.css";

function CategoryBar() {
  const sports = ["Football", "Basketball", "Tennis", "Swimming", "Hockey"];
  return (
    <div className="category-bar">
      {sports.map((sport) => (
        <button type="button" key={sport} className="category-button">
          {sport}
        </button>
      ))}
    </div>
  );
}
export default CategoryBar;
