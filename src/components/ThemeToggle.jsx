import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const ThemeToggle = ({ isDarkTheme, toggleDarkTheme }) => {
  return (
    <section className="toggle-container">
      <button onClick={toggleDarkTheme} className="dark-toggle">
        {isDarkTheme ? (
          <BsFillSunFill className="toggle-icon" />
        ) : (
          <BsFillMoonFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
