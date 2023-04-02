import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "./AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { user } = useContext(AuthContext);
  //const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <>
      <div className="messageInfo">
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </>
  );
};

export default Message;
