import { useEffect, useState } from "react";
import Layout from "../Layout/layout";
import { MessageList } from "../Message/MessageList";
import "./Message.css";
const Messages = () => {
  const [message, setMessage] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMessage = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://rashmi-website-default-rtdb.firebaseio.com/message.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      console.log(Object.values(data));
      setMessage(Object.values(data));
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchMessage();
  }, []);
  let content = <p>No Message</p>;
  if (message.length > 0) {
    content = <MessageList messages={message} />;
  }
  if (isLoading) {
    content = <p>Loading.....</p>;
  }
  if (error) {
    content = <p>{error}</p>;
  }

  return (
    <Layout>
      <section>{content}</section>
    </Layout>
  );
};
export default Messages;
