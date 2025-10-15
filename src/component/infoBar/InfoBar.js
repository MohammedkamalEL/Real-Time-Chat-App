import "./infBar.css";
import img1 from "../../assits/3.png";
import img2 from "../../assits/2.png";

export default function InfoBar({ room }) {
  return (
    <>
      <div className="infoBar">
        <div className="leftInnerContainer">
          <img
            className="onlineIcon"
            alt="online icon"
            src={img1}
            style={{ width: "40px",borderRadius:'50%',height:'40px' }}
          />
          <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
          <a href="/">
            <img alt="close icon" src={img2}  style={{ width: "40px" }}/>
          </a>
        </div>
      </div>
    </>
  );
}
