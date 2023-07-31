import { useEffect } from "react";
import "../css/culture_detail.css";

function CultureDetail({ index, imageLink, description }) {
  useEffect(() => {
    document.querySelectorAll(".culture_box p")[index].innerHTML = description;
  }, []);

  return (
    <div className="culture_box">
      <img src={imageLink} alt="culture" />
      <p></p>
    </div>
  );
}

export default CultureDetail;
