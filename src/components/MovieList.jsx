import movies from "../data/movies.json";

function MovieList() {
  return (
    <>
      {movies.map((movieObj) => {
        return (
            <div key={movieObj.id} className="card">
                <img src={movieObj.imgURL}/>
                <h3>{movieObj.title}</h3>
                <p>Rating: {movieObj.rating}</p>
            </div>
        );
      })}
    </>
  );
}

export default MovieList;
