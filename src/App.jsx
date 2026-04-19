import TemperaturePage from "./components/TempertaurePage";
import ThemeToggle from "./contexts/ThemeToggle";
import { useTheme } from "./contexts/ThemeContext";
import "./index.css";

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>Week 9 - Day 2 Assignment</h1>
        <ThemeToggle />
      </header>
      <main>
        <TemperaturePage />
      </main>
      <footer>
        <p>Current theme: {theme}</p>
      </footer>
    </div>
  );
}

function App() {
  return <AppContent />;
}

export default App;
