import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../images/logo RGB Original Digital.png";
import { useAuth } from "../contexts/AuthContext";

function Header() {
  const navigate = useNavigate();
  const { token, setToken, isAdmin } = useAuth();
  const [searchVisible, setSearchVisible] = useState(false);
  const [search, setSearch] = useState("");
  const searchButtonRef = useRef(null);
  const inputRef = useRef(null);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
  };

  const handleClickOutside = (event) => {
    if (
      searchButtonRef.current &&
      !searchButtonRef.current.contains(event.target) &&
      inputRef.current &&
      !inputRef.current.contains(event.target)
    ) {
      setSearchVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleButtonClick = () => {
    setSearchVisible(!searchVisible);
  };

  const handleLogout = () => {
    setToken(null);
    navigate("/login");
  };

  return (
    <header className="header">
      {token ? (
        <Link to="/" className="header_button" onClick={handleLogout}>
          Déconnexion
        </Link>
      ) : (
        <Link to="/login" className="header_button">
          Connexion
        </Link>
      )}
      {isAdmin && (
        <Link to="/admin" className="header_button">
          Administration
        </Link>
      )}
      <Link to="/">
        <img src={Logo} alt="logo Origins digital" className="headerLogo" />
      </Link>
      <div className="search-container">
        <button
          type="button"
          className={`category-button search-button ${
            searchVisible ? "active" : ""
          }`}
          onClick={handleButtonClick}
          ref={searchButtonRef}
        >
          <span className="material-icons search-icon-color">search</span>
          <span className="search-text search-text-color">Rechercher</span>
        </button>
        {searchVisible && (
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Rechercher"
              value={search}
              onChange={handleSearchChange}
              ref={inputRef}
            />
          </form>
        )}
      </div>
    </header>
  );
}

export default Header;
