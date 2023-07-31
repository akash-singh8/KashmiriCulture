import "../css/navbar.css";

import { useNavigate } from "react-router-dom";

const NavBar = ({ logged, setLogged }) => {
  const navigate = useNavigate();

  return (
    <nav>
      <h1 onClick={() => navigate("/")}>KashmiriCulture</h1>
      <div className="nav_menu">
        <div className="nav_options">
          <span className="nav_option" onClick={() => navigate("/")}>
            Home
          </span>
          <span
            className="nav_option"
            onClick={() => {
              window.scrollTo(0, window.pageYOffset + window.innerHeight);
            }}>
            Cultures
          </span>
        </div>

        {logged ? (
          <button
            onClick={() => {
              localStorage.removeItem("authToken");
              setLogged(false);
            }}>
            {" "}
            Logout{" "}
          </button>
        ) : (
          <button onClick={() => navigate("/signup")}>
            Register &nbsp;&#8594;
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
