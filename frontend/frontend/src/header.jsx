export default function Header({ theme, setTheme }) {
  return (
    <div className="header">
      <h1>Contact Manager</h1>
      <div className="toggle" onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }>
        {theme === "dark" ? "☀ Light" : "🌙 Dark"}
      </div>
    </div>
  );
}
