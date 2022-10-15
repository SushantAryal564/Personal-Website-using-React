import React from "react";
import MessageCard from "./MessageCard";
import "./MessageList.css";
export const MessageList = (props) => {
  return (
    <div className="cardContainer">
      <div className="card-list">
        {props.messages.map((message) => (
          <MessageCard
            name={message.name}
            email={message.email}
            message={message.message}
          ></MessageCard>
        ))}
      </div>
    </div>
  );
};
