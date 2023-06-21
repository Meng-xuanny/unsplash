import Gallery from "./components/Gallery";
import SearchForm from "./components/SearchForm";
import ThemeToggle from "./components/ThemeToggle";
import { useGlobalContext } from "./context";

const App = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <main>
      <ThemeToggle
        isDarkTheme={isDarkTheme}
        toggleDarkTheme={toggleDarkTheme}
      />
      <SearchForm />
      <Gallery />
    </main>
  );
};
export default App;
