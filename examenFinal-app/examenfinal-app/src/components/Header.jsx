import { Link } from "react-router-dom";
import "./Header.css";          //  <-- nuevo (para el degradado)

export default function Header() {
  return (
    <header className="main-header">
      <ul>                     {/* UL sin listStyle: "none" -> aparecen viñetas */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </header>
  );
}
