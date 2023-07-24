import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-distributed">
      <h3>
        <img
          className="logoFooter"
          src="/src/images/logo RGB Original Digital.png"
          alt="logo"
        />
      </h3>
      <p className="footer-company-name">
        Company Name © 2013 - 2021 Origins. All rights reserved
      </p>
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/company/origins-digital-emg/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/WildCodeSchool/2023-02-JS-Reims-project-3-origins-digital"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
