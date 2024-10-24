function Movie(props) {
    return (
        <div className="card">
            <img src={props.movieDetails.imgURL} alt={props.movieDetails.title} />
            <h3>{props.movieDetails.title}</h3>
            <p>Rating: {props.movieDetails.rating}</p>
            <p>
              <button onClick={() => props.callbackToDelete(props.movieDetails.id)}>Delete movie</button>
            </p>
        </div>
    );
}

export default Movie;