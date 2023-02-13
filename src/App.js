import {useState, useEffect} from "react";

import MovieCard from "./MovieCard";

import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "https://www.omdbapi.com?apikey=a6e17971";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [serchTerm, setSerchTerm] = useState("One Piece");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("One Piece");
  }, []);

  return (
    <div>
      <div className="app">
        <h1>EnMovie</h1>

        <div className="search">
          <input
            type="text"
            placeholder="Search for movies"
            value={serchTerm}
            onChange={(e) => setSerchTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => {
              searchMovies(serchTerm);
              console.log(movies);
            }}
          />
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}

        <footer>
          <p>Copyright © 2021</p>
          <p>
            Developed by{" "}
            <a href="https://behruzberdiyev.netlify.app">Behruz Berdiyev</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
//  API KEY
