export default function Header({ theme, setTheme }) {
  return (
    <header className="header">
      <h1>📇 Contact Manager</h1>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
      </button>
    </header>
  );
}
