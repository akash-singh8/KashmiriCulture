import "../css/culture_view.css";

import Comment from "../components/Comment";
import CultureDetail from "../components/CultureDetail";
import like from "../assets/like.png";
import send from "../assets/send.png";

function CultureView({ title }) {
  return (
    <section className="culture_view">
      <h1>{title}</h1>
      <div className="culture_container">
        <div className="culture_details">
          <CultureDetail
            index={0}
            imageLink={
              "https://www.livemint.com/lm-img/img/2023/04/20/600x338/Eid_ul-Fitr_1682025700659_1682025700799.jpg"
            }
            description={
              "<strong>Eid-ul-Fitr</strong><br />This joyous festival marks the end of Ramadan, the Islamic holy month of fasting. Kashmiri Muslims come together to offer prayers at mosques and share delicious feasts with family and friends. It's a time of spreading love, forgiveness, and charity."
            }
          />
          <CultureDetail
            index={1}
            imageLink={
              "https://www.livemint.com/lm-img/img/2023/04/20/600x338/Eid_ul-Fitr_1682025700659_1682025700799.jpg"
            }
            description={
              "<strong>Eid-ul-Fitr</strong><br />This joyous festival marks the end of Ramadan, the Islamic holy month of fasting. Kashmiri Muslims come together to offer prayers at mosques and share delicious feasts with family and friends. It's a time of spreading love, forgiveness, and charity."
            }
          />
          <CultureDetail
            index={2}
            imageLink={
              "https://www.livemint.com/lm-img/img/2023/04/20/600x338/Eid_ul-Fitr_1682025700659_1682025700799.jpg"
            }
            description={
              "<strong>Eid-ul-Fitr</strong><br />This joyous festival marks the end of Ramadan, the Islamic holy month of fasting. Kashmiri Muslims come together to offer prayers at mosques and share delicious feasts with family and friends. It's a time of spreading love, forgiveness, and charity."
            }
          />
        </div>
        <div className="culture_actions">
          <div className="like">
            <img src={like} alt="like" /> <span>Like</span> &nbsp;| <p> 1280 likes</p>
          </div>

          <div className="comment">
            <textarea placeholder="commment..."></textarea>
            <img src={send} alt="comment" />
          </div>
          
          <div className="comments">
            <h1>Comments</h1>
                <Comment username={"Akash Singh"} comment={"Awesome, loved it"}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CultureView;
