import movies from "../data/movies.json";
import { useState } from 'react';

function MovieList() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = (movieId) => {
    const updatedMovies = moviesToDisplay.filter((movieObj) => movieObj.id !== movieId);
    setMoviesToDisplay(updatedMovies);
    setNumberOfMovues(updatedMovies.length);
  };

  return (
    <>
      <h2>We currently have {moviesToDisplay.length} movies available</h2>
      {moviesToDisplay.map((movieObj) => {
        return (
          <div key={movieObj.id} className="card">
            <img src={movieObj.imgURL} alt={movieObj.title} />
            <h3>{movieObj.title}</h3>
            <p>Rating: {movieObj.rating}</p>
            <p>
              <button onClick={() => deleteMovie(movieObj.id)}>Delete movie</button>
            </p>
          </div>
        );
      })}
    </>
  );
}

export default MovieList;
