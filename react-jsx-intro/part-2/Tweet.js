function Tweet({ date, message, username }) {
  return (
    <div className="tweet">
      <span className="username">{username}</span>
      <span className="date">{date}</span>
      <p>{message}</p>
    </div>
  );
}
