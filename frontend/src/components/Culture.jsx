import "../css/culture.css";

function Culture({ imageLink, title }) {
  return (
    <div className="culture">
      <img src={imageLink} alt="culture type" />
      <p>{title}</p>
    </div>
  );
}

export default Culture;
