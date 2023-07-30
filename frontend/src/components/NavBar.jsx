import "../css/navbar.css";

const NavBar = () => {
  return (
    <nav>
        <h1>KashmiriCulture</h1>
        <div className="nav_menu">
            <div className="nav_options">
                <span className="nav_option">Home</span>
                <span className="nav_option">Cultures</span>
                <span className="nav_option">Map</span>
            </div>
            <button>Register &nbsp;&#8594;</button>
        </div>
    </nav>
  );
};

export default NavBar;
