import Logo from "../images/logo RGB Original Digital.png";

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="logo Origins digital" className="headerLogo" />
      <button type="button" className="header_button">
        Log In
      </button>
    </header>
  );
}

export default Header;
