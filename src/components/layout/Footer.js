import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <ul className="social-icons">
        <li>
          <a
            href="https://github.com/sv-shivansh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/shivansh-vishwakarma-8a6a82205/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/sv_shivansh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
      <div className="text">
        <div className="name-text">
          Made by{" "}
          <a
            href="https://sv-shivansh.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shivansh Vishwakarma
          </a>
        </div>
        <div className="copyright-text">
          All Copyrights Reserved 2021 &copy;
        </div>
      </div>
    </footer>
  );
};

export default Footer;
