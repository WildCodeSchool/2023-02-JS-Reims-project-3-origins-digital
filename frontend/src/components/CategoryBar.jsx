import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CategoryBar.css";

function CategoryBar() {
  const [search, setSearch] = useState("");
  const sports = [
    { name: "Football", icon: "sports_soccer" },
    { name: "Basketball", icon: "sports_basketball" },
    { name: "Tennis", icon: "sports_tennis" },
    { name: "Swimming", icon: "pool" },
    { name: "Hockey", icon: "sports_hockey" },
  ];

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="category-bar">
      <div className="search-container">
        <input
          type="text"
          placeholder="..u look for ?"
          value={search}
          onChange={handleSearchChange}
        />
        <Link
          key="Search"
          className="category-button search-button"
          to={`/searchResults/${search}`}
        >
          <span className="material-icons">search</span>
        </Link>
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
