import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
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

  const history = useHistory();

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    history.push(`/search/${search}`);
    setSearch("");
  };

  return (
    <div className="category-bar">
      <form className="search-container" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="..u look for ?"
          value={search}
          onChange={handleSearchChange}
        />
        <button type="submit" className="category-button search-button">
          <span className="material-icons">search</span>
        </button>
      </form>
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
