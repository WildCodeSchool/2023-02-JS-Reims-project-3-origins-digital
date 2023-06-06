import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./CategoryBar.css";

function CategoryBar() {
  const navigate = useNavigate();
  const [showSearchInput, setShowSearchInput] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
  };

  const handleButtonClick = () => {
    setShowSearchInput((prevState) => !prevState);
  };

  return (
    <div className="category-bar">
      <form className="search-container" onSubmit={handleSubmit}>
        {showSearchInput && (
          <input
            type="text"
            placeholder="Recherche"
            value={search}
            onChange={handleSearchChange}
          />
        )}
        <button
          type="submit"
          key="Search"
          className="category-button search-button"
          onClick={handleButtonClick}
        >
          <span className="material-icons">search</span>
          <span className="search-text">Search</span>
        </button>
      </form>
      {sports.map((sport) => (
        <Link
          key={sport.name}
          className="category-button"
          to={`/category/${sport.name}`}
        >
          <span className="material-icons">{sport.icon}</span>
          {sport.name}
        </Link>
      ))}
    </div>
  );
}

export default CategoryBar;
