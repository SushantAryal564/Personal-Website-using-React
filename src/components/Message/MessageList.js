import React from "react";

export const MessageList = (props) => {
  const messageList = props.messages.map((message) => <li>{message.email}</li>);
  return <ul>{messageList}</ul>;
};
