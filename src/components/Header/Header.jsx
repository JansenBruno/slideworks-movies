import "./Header.css";
import Logo from "../../assets/img/logo.png";
import { useContext } from "react";
import { ThemeContext } from "../../themeContext";
import { FaRegLightbulb, FaLightbulb } from "react-icons/fa";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <header className={isDarkMode ? "dark-mode header" : "header"}>
      <div className="header-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <button
        title={
          isDarkMode ? "mudar para o modo claro" : "mudar para o modo escuro"
        }
        onClick={toggleDarkMode}
      >
        {isDarkMode ? <FaLightbulb /> : <FaRegLightbulb />}
      </button>
    </header>
  );
};

export default Header;
