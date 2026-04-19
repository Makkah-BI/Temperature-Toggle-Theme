import { useTheme } from "../contexts/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
}

export default ThemeToggle;
