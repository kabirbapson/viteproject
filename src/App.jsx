import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(true)
  return (
    <div>
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
      </h2>
      <button onClick={()=>setHasLiked(!hasLiked)
      } style={{
        position:'relative',
        top:'-50px',
        right:'-50px',
        size:'10px', 
        border:'0px',
        margin:'0px',
        padding:'0px',  
        backgroundColor:'#00ff'      
      }}
      >
        {hasLiked ? '❤' : '🧡' }
      </button>
    </div>
  );
};
const App = () => {
  console.log('heyy')
  return (
    <>
      <Card title="Isah" />
      <Card title="Slow" />
      <Card title="Solomon" />
    </>
  );
};
export default App;
