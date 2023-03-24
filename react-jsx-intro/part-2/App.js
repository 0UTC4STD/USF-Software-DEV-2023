function App() {
  return (
    <div>
      <Tweet
        name="Eman Name"
        username="EMANDAMAN"
        date={new Date().toDateString()}
        message="I don't recall what we learned looking like this at all"
      />
      <Tweet
        name="Name McNameson"
        username="Son of the Name"
        date={new Date().toDateString()}
        message="Yeah same"
      />
      <Tweet
        name="Amen Mena"
        username="Name but rearranged"
        date={new Date().toDateString()}
        message="Would've saved about 30 min if I knew Index.js needed to be last"
      />
    </div>
  );
}
