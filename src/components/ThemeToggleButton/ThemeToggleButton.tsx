import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const ThemeToggleButton: React.FC = () => {
    const themeContext = useContext(ThemeContext);

    if(!themeContext) {
        throw new Error("ThemeToggleButton must be used within a ThemeProvider");
    }

    const { theme, toggleTheme } = themeContext;

    return (
        <button onClick={toggleTheme} className={`px-4 py-3 rounded ${
            theme === "light"
              ? "bg-yellow-500 text-black"
              : "bg-gray-800 text-white"
          }`}
        >
          {theme === "light" ? "🌙 Switch to Dark" : "☀️ Switch to Light"}

        </button>
    )
}

export default ThemeToggleButton;