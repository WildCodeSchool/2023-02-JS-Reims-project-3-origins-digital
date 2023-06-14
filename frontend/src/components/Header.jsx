import { Link } from "react-router-dom";
import Logo from "../images/logo RGB Original Digital.png";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} alt="logo Origins digital" className="headerLogo" />
      </Link>
      <Link to="/connexion" className="header_button">
        Connexion
      </Link>
    </header>
  );
}

export default Header;
