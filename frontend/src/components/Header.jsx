import Logo from "../images/logo RGB Original Digital.png";

function Header() {
  return (
    <>
      <img src={Logo} alt="logo Origins digital" className="header logo" />;
      <button type="button" className="header_button">
        Log In
      </button>
      ;
    </>
  );
}

export default Header;
