import "../css/footer.css";

import logo from "../assets/logo.png";
import akash from "../assets/akash_profile.png";
import brijendra from "../assets/brijendra_profile.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer_header">
        <img src={logo} alt="logo" />
        <h1>KashmiriCulture</h1>
      </div>
      <div className="footer_developers">
        <strong>Developers</strong>
        <div className="developer">
          <img src={akash} alt="akash" />
          <div className="developer_detail">
            <strong>Akash Singh</strong>
            <p>Full-Stack Developer</p>
            <div>
              <a href="https://www.linkedin.com/in/akash-singh8" target="blank">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="https://github.com/akash-singh8" target="blank">
                <img src={github} alt="github" />
              </a>
            </div>
          </div>
        </div>
        <div className="developer">
          <img src={brijendra} alt="akash" />
          <div className="developer_detail">
            <strong>Brijendra Pratap</strong>
            <p>Application Developer</p>
            <div>
              <a href="https://www.linkedin.com/in/brijendra30" target="blank">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="https://github.com/Officebrijendra" target="blank">
                <img src={github} alt="github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
