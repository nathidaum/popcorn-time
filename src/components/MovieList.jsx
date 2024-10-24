import Movie from "./Movie";

function MovieList(props) {

  return (
    <section className="gallery">
      {props.moviesToDisplay.map((movieObj) => {
        return (
          <Movie 
            key={movieObj.id} 
            movieDetails={movieObj} 
            callbackToDelete={props.callBackToDelete}
          />
        );
      })}
    </section>
  );
}

export default MovieList;
