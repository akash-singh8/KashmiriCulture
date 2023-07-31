import "../css/navbar.css";

import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <h1 onClick={() => navigate("/")}>KashmiriCulture</h1>
      <div className="nav_menu">
        <div className="nav_options">
          <span className="nav_option" onClick={() => navigate("/")}>
            Home
          </span>
          <span className="nav_option" onClick={() => navigate("/")}>
            Cultures
          </span>
          <span className="nav_option" onClick={() => navigate("/")}>
            Map
          </span>
        </div>
        <button onClick={() => navigate("/signup")}>
          Register &nbsp;&#8594;
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
