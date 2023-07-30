import "../css/home.css";

import cultureMap from "../assets/cultureMap.png";
import Culture from "../components/Culture";

const Home = () => {
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
          <button>Browse Cultures &nbsp;&#8594;</button>
        </div>
        <img src={cultureMap} alt="map" />
      </section>

      <div className="home_seperator">
        - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>

      <section className="cultures">
        <h1>CULTURES</h1>
        <div>
          <Culture imageLink={"https://m.media-amazon.com/images/I/71WX36N1YBL.jpg"} title={"Culture Title"}/>
          <Culture imageLink={"https://m.media-amazon.com/images/I/71WX36N1YBL.jpg"} title={"Culture Title"}/>
          <Culture imageLink={"https://m.media-amazon.com/images/I/71WX36N1YBL.jpg"} title={"Culture Title"}/>
          <Culture imageLink={"https://m.media-amazon.com/images/I/71WX36N1YBL.jpg"} title={"Culture Title"}/>
          <Culture imageLink={"https://m.media-amazon.com/images/I/71WX36N1YBL.jpg"} title={"Culture Title"}/>
          <Culture imageLink={"https://m.media-amazon.com/images/I/71WX36N1YBL.jpg"} title={"Culture Title"}/>
        </div>
      </section>
    </main>
  );
};

export default Home;
