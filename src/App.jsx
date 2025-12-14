import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";

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
  const [searchTerm, setSearchTerm] = useState();
  const [errorMessage, setErrorMessage] = useState('All Me');

  const VITE_TMDB_API_KEY="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjRjY2NjZjYzMTc5YjA0NzFiYjY0YzA0ODYyMDI3OSIsIm5iZiI6MTc2NTcxNzg0NS41NTksInN1YiI6IjY5M2ViNzU1ZGQyYjdjY2U3YTk5OTgwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QjnWHvBtcfxL_FL0QjPd76fiaYCkjHnu2g4iWNSyoMc"
  const API_BASE_URL = "https://api.themoviedb.org/3/discover/movie";
  
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const API_OPTION = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const fetchMovies = async () => {
    try {
      const response = await fetch(API_BASE_URL, API_OPTION);
      const res = await response.json();

      console.log("dd", res);
    } catch (error) {
      setErrorMessage("Error found", errorMessage);
      console.log(error.status_message);
      setErrorMessage(error.status_message)
    }
  };

  useEffect(() => {
    fetchMovies();

    console.log("dggdgd");
  }, []);

  return (
    <>
      <header className="text-6xl font-bold text-amber-950-0.2">
        Movies World!
      </header>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <section>
        All Movies
        { errorMessage}
      </section>
      <Card title="Isah" />
      <Card title="Slow" />
      <Card title="Solomon" />
    </>
  );
};
export default App;
