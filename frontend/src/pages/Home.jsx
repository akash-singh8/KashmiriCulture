import "../css/home.css";

import cultureMap from "../assets/cultureMap.png";
import Culture from "../components/Culture";

import { Link } from "react-router-dom";

const Home = ({ cultureHead }) => {
  return (
    <main>
      <section className="home">
        <div className="home_detail">
          <h3>-Explore diverse culture of</h3>
          <h1>Jammu & Kashmir</h1>
          <p>
            &quot;Kashmir is a paradise on earth, where
            <br />
            &nbsp;the beauty of nature knows no bounds.&quot;
            <br /> - Amir Khusro
          </p>
          <button
            onClick={() => {
              window.scrollTo(0, window.pageYOffset + window.innerHeight);
            }}>
            Browse Cultures &nbsp;&#8594;
          </button>
        </div>
        <img src={cultureMap} alt="map" />
      </section>

      <div className="home_seperator">
        - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>

      <section className="cultures">
        <h1>CULTURES</h1>
        <div>
          {cultureHead.map((culture) => (
            <Link to={`/culture/${culture._id}`} key={culture._id}>
              <Culture
                imageLink={culture.imageLink}
                title={culture.cultureName}
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
