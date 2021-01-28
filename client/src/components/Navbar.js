import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="navbar">
      <li>
        <Link className="navLink" to="/">
          Input Form
        </Link>
      </li>
      <li>
        <Link className="navLink" to="/users">
          Saved Users
        </Link>
      </li>
    </ul>
  );
}
