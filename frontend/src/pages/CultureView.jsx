import "../css/culture_view.css";

import Comment from "../components/Comment";
import CultureDetail from "../components/CultureDetail";
import like from "../assets/like.png";
import send from "../assets/send.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CultureView() {
  const { id } = useParams();
  const [culture, setCulture] = useState([]);


  async function handleComment() {
    try {
      const textarea = document.querySelector("textarea");
      const response = await fetch("http://127.0.0.1:5050/comment", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        body: JSON.stringify({ cultureID: culture._id, username: "Akash", comment: textarea.value }),
      });

      const responseData = await response.json();

      console.log(responseData);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleLike() {
    try {
      const response = await fetch("http://127.0.0.1:5050/like", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        body: JSON.stringify({ cultureID: culture._id }),
      });


      const responseData = await response.json();

      console.log(responseData);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    async function getCulture() {
      const response = await fetch(`http://127.0.0.1:5050/cultures/${id}`, {
        method: "GET",
      });

      const responseData = await response.json();

      console.log(responseData);
      setCulture(responseData.cultures.cultures[0]);
    }

    setInterval(() => {
      getCulture();
    }, 1000);
  }, []);

  return (
    <section className="culture_view">
      <h1>{culture.title}</h1>
      <div className="culture_container">
        <div className="culture_details">
          {culture.content?.map((current, i) => (
            <CultureDetail
              key={current._id}
              index={i}
              imageLink={current.imageLink}
              description={current.description}
            />
          ))}
        </div>
        <div className="culture_actions">
          <div className="like">
            <img src={like} alt="like" /> <span onClick={handleLike}>Like</span> &nbsp;|{" "}
            <p> {culture.likes} likes</p>
          </div>

          <div className="comment">
            <textarea placeholder="commment..."></textarea>
            <img src={send} alt="comment" onClick={handleComment} />
          </div>

          <div className="comments">
            <h1>Comments</h1>
            {culture.comments?.map((comment) => (
              <Comment
                key={comment._id}
                username={comment.username}
                comment={comment.comment}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CultureView;
