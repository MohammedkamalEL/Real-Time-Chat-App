import "./Ms.css";
import reactEmojey from "react-emoji";
export default function Message({ message: { user, text }, name }) {
  let isSendByCruntUser = false;
  const trimName = name.trim().toLowerCase();

  if (user === trimName) {
    isSendByCruntUser = true;
  }

  return isSendByCruntUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimName}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{reactEmojey.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{reactEmojey.emojify(text)}</p>
      </div>
      <p className="sentText pl-10 ">{user}</p>
    </div>
  );
}
