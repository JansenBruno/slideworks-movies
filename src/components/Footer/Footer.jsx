import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from "../../assets/img/whitelogo.png";
import { useContext } from 'react';
import { ThemeContext } from "../../themeContext";

function Footer() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <footer className={isDarkMode ? 'dark-mode footer' : 'footer'}>
      <img src={Logo} alt="Logo" />
      <hr />
      <div className="footer__info">
        <small>
            <a href="#" title="Acessar página de termos e condições">Terms & Conditions</a>
        </small>
        <small><a href="#" title="Acessar página de políticas de privacidade">Privacy Policy</a></small>
      </div>
      <div className="footer__icons footer__social-icons">
          <a
          href="https://www.facebook.com/"
          target="blank"
          title="Acesse nossa página no Facebook">
            <FaFacebook />
          </a>

          <a
          href="https://twitter.com/"
          target="blank"
          title="Acesse nosso perfil no Twitter">
            <FaTwitter />
          </a>

          <a
          href="https://www.instagram.com/"
          target="blank"
          title="Acesse nosso perfil no Instagram">
            <FaInstagram />
          </a>
        </div>
    </footer>
  );
}

export default Footer;
