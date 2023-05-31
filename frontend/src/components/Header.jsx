import Logo from "../images/logo RGB Original Digital.png";

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="logo Origins digital" className="headerLogo" />;
      <button type="button" className="header_button">
        Log In
      </button>
      ;
    </div>
  );
}

export default Header;
