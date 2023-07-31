import "../css/comment.css"

import user from "../assets/user.png";

function Comment({ username, comment }) {
  return (
    <div className="comment_box">
      <img src={user} alt="user" />
      <div>
          <strong>{username}</strong>
          <p>{comment}</p>
      </div>
    </div>
  );
}

export default Comment;
