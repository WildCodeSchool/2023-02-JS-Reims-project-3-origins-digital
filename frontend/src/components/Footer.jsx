import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          <img
            className="logoFooter"
            src="/src/images/logo RGB Original Digital.png"
            alt="logo"
          />
        </h3>
        <p className="footer-links">
          <a href="#home"> Home </a> .{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.euromediagroup.com/terms"
          >
            Terms & conditions
          </a>
        </p>
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
      </div>
      <div className="footer-right">
        <p>Contact Us</p>
        <form action="#" method="post">
          <input type="text" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message" />
          <button type="button">Send</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
