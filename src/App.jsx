import { useState } from 'react'
import Header from './components/Header'
import MovieList from './components/MovieList'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <section className="gallery">
    <MovieList/>
    </section>
    <Footer/>
    </>
  )
}

export default App
