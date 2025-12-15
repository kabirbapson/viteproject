import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";
import MovieCard from "./components/MovieCard";

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
  const [errorMessage, setErrorMessage] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = "https://api.themoviedb.org/3/discover/movie";
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const API_OPTION = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const fetchMovies = async (query = "") => {
    setLoading(true);
    setErrorMessage("");
    try {
      const trimmedQuery = query.trim();
      const endPoint = trimmedQuery
        ? `https://api.themoviedb.org/3/search/movie?query=${trimmedQuery}`
        : `${API_BASE_URL}?sort_by=popularity.desc`;

      //

      // const endPoint = trimmedQuery
      //   ? `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      //       trimmedQuery

      const response = await fetch(endPoint, API_OPTION);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.status_message || "request failed");
      }
      setMovies(data.results);
      setLoading(false);
      console.log({ data });
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <>
      <header className="text-6xl font-bold text-amber-950-0.2">
        Movies World!
      </header>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <section>
        All Movies
        {loading ? (
          <div className="flex gap-2 justify-center py-10">
            <span className="h-3 w-3 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]" />
            <span className="h-3 w-3 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]" />
            <span className="h-3 w-3 bg-blue-600 rounded-full animate-bounce" />
          </div>
        ) : errorMessage ? (
          <p className="text-red-600"> Fetch Error {errorMessage}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-6">
            {movies?.map((movie) => (
              <div key={movie.id} onClick={() => console.log(movie.title)}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        )}
      </section>
      <Card title="Isah" />
      <Card title="Slow" />
      <Card title="Solomon" />
    </>
  );
};
export default App;
