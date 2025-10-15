import "./input.css";
export default function Input({ meassage, setMeassage, sendMessage }) {
  return (
    <>
      <form className="form">
        <input
          className="input"
          type="text"
          placeholder="Type a message..."
          value={meassage}
          onChange={(e) => setMeassage(e.target.value)}
          onKeyUp={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
        />
        <button className="sendButton" onClick={(e) => sendMessage(e)}>
          Send
        </button>
      </form>
    </>
  );
}
