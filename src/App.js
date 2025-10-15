import "./App.css";
import { Route, Routes } from "react-router-dom";
import Join from "./component/join/Join";
import Chat from "./component/chat/Chat";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Join/>} />
        <Route path="/chat" element={<Chat/>}/>
      </Routes>
    </>
  );
}

export default App;
