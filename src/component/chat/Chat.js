import { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import InfoBar from "../infoBar/InfoBar";
import Input from "../Input/Input";
import Message from "../message/Message";
import ShowUsers from "../showUsers/ShowUsers";

import "./chat.css";

let socket;

export default function Chat() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [meassage, setMeassage] = useState("");
  const [meassages, setMeassages] = useState([]);
  const [allusers, setAllUsers] = useState({});
  const ENDPOINT = "http://localhost:5000";
  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);
    setName(name);
    setRoom(room);

    socket = io("https://server-file-chat-app.onrender.com/", {
      transports: ["websocket"],
    });
    socket.emit("Join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, window.location.search]);

  useEffect(() => {
    socket.on("meassage", (meassage) => {
      setMeassages([...meassages, meassage]);
    });

    // console.log(meassages);
  }, [meassages]);

  useEffect(() => {
    socket.on("roomData", (users) => {
      // console.log(users.users);
      setAllUsers(users);
    });
  }, [allusers]);

  function sendMessage(event) {
    event.preventDefault();

    if (meassage) {
      socket.emit("sendMessage", meassage, () => setMeassage(""));
    }
  }

  return (
    <>
      <div className="outerContainer">
        <div className="container">
          <InfoBar room={room} />
          <Message meassages={meassages} name={name} />
          <Input
            value={meassage}
            setMeassage={setMeassage}
            sendMessage={sendMessage}
          />
          
        </div>
          <ShowUsers users={allusers}/>
      </div>
    </>
  );
}
