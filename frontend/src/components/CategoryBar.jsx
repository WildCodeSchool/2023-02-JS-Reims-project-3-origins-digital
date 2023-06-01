import React from "react";
import { Link } from "react-router-dom";
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
      <div className="search-container">
        <Link
          key="Search"
          className="category-button search-button"
          to="/searchresults"
        >
          <span className="material-icons">search</span>
        </Link>
        <input type="text" placeholder="..u look for ?" />
      </div>
      {sports.map((sport) => (
        <Link
          key={sport.name}
          className="category-button"
          to={`/category/${sport.name}`}
        >
          <span className="material-icons">{sport.icon}</span>
        </Link>
      ))}
    </div>
  );
}

export default CategoryBar;
