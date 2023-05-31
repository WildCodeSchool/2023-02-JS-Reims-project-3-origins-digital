import React from "react";
import "./CategoryBar.css";

function CategoryBar() {
  const sports = [
    { name: "Football", icon: "sports_soccer" },
    { name: "Basketball", icon: "sports_basketball" },
    { name: "Tennis", icon: "sports_tennis" },
    { name: "Swimming", icon: "pool" },
    { name: "Hockey", icon: "sports_hockey" },
  ];
  return (
    <div className="category-bar">
      {sports.map((sport) => (
        <button type="button" key={sport.name} className="category-button">
          <span className="material-icons">{sport.icon}</span>
        </button>
      ))}
    </div>
  );
}

export default CategoryBar;
