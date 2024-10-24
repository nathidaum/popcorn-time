import { useState } from 'react'

import Header from './components/Header'
import MovieList from './components/MovieList'
import Footer from './components/Footer'

import movies from "./data/movies.json";

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = (movieId) => {
    const updatedMovies = moviesToDisplay.filter((movieObj) => movieObj.id !== movieId);
    setMoviesToDisplay(updatedMovies);
  };


  return (
    <>
    <Header numberOfMovies={moviesToDisplay.length}/>
    <MovieList moviesToDisplay={moviesToDisplay} callBackToDelete={deleteMovie}/>
    <Footer/>
    </>
  )
}

export default App
