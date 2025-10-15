import "./message.css";
import ScroolToBotton from "react-scroll-to-bottom";
import Ms from '../Messages/Ms'
export default function Message({ meassages,name }) {
  return (
    <>
      <ScroolToBotton className='messages'>
        {meassages.map((message, i) => (
          <div key={i}>
            <Ms message={message} name={name} />
          </div>
        ))}
      </ScroolToBotton>
    </>
  );
}
