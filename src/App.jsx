import { useEffect, useState } from "react";
import "./App.css";

const Card = ({ title }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  useEffect(() => {
    console.log({ title }, "been been" + { hasLiked });
  }, [hasLiked]);

  return (
    <div onClick={() => setCount(count + 1)}>
      <h2
        style={{
          backgroundColor: "skyblue",
          margin: "20px",
          padding: "10px",
          border: "0,5px solid red",
          borderRadius: "10px",
        }}
      >
        {title}
        <br />
        {count ? count : null}
      </h2>
      <button
        onClick={() => setHasLiked(!hasLiked)}
        style={{
          position: "relative",
          top: "-50px",
          right: "-50px",
          size: "10px",
          border: "0px",
          margin: "0px",
          padding: "0px",
          backgroundColor: "#00ff",
        }}
      >
        {hasLiked ? "🧡" : "❤"}
      </button>
    </div>
  );
};
const App = () => {
  console.log("heyy");
  return (
    <>
      <div class="text-6xl font-bold underline text-amber-950">Hello world!</div>
      <Card title="Isah" />
      <Card title="Slow" />
      <Card title="Solomon" />
    </>
  );
};
export default App;
