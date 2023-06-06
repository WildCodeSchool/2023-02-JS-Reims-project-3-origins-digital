import { Link } from "react-router-dom";
import Logo from "../images/logo RGB Original Digital.png";

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="logo Origins digital" className="headerLogo" />
      <Link to="/connexion" className="header_button">
        Connexion
      </Link>
    </header>
  );
}

export default Header;
