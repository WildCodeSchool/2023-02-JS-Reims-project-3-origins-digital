import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../images/logo RGB Original Digital.png";

function Header() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
  };
  return (
    <header className="header">
      <Link to="/connexion" className="header_button">
        Connexion
      </Link>
      <img src={Logo} alt="logo Origins digital" className="headerLogo" />
      <form className="search-container" onSubmit={handleSubmit}>
        <button
          type="submit"
          key="Search"
          className="category-button search-button"
        >
          <span className="material-icons search-icon-color">search</span>
          <span className="search-text search-text-color">Search</span>
        </button>
        <input
          type="text"
          placeholder="Search Sports,Teams..."
          value={search}
          onChange={handleSearchChange}
        />
      </form>
    </header>
  );
}

export default Header;
