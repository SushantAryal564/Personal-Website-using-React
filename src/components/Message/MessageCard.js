import "./MessageCard.css";
const MessageCard = (props) => {
  return (
    <div className="card">
      <div className="card-detail">
        <div class="three">
          <h1>{props.name}</h1>
        </div>
        <div className="card-email">{props.email}</div>
        <div className="card-message">{props.message}</div>
      </div>
    </div>
  );
};
export default MessageCard;
