import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const initialMode = () => {
  const preferedTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches; //boolean
  const storedTheme = localStorage.getItem("dark-theme") === "true";
  return storedTheme || preferedTheme;
};

const Context = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(initialMode());
  const [searchTerm, setSearchTerm] = useState("cat");

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);

    // document.querySelector("body").classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("dark-theme", newDarkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <GlobalContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default Context;
