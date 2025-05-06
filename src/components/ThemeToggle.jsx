import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa6";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "8px 30px",
        cursor: "pointer",
        backgroundColor: theme === "dark" ? "#444" : "#ddd",
        color: theme === "dark" ? "#fff" : "#000",
        border: "none",
        borderRadius: "5px",
        fontSize: "x-large",
      }}
    >
      {theme === "light" ? <BsFillMoonStarsFill /> : <FaSun />}
    </button>
  );
};

export default ThemeToggle;
