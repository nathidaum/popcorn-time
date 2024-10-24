import "./Header.css"

function Header(props) {
return (
        <header className="Header">
        <h1>Welcome to Popcorn Time! 🍿</h1>
        <h2>We have {props.numberOfMovies} movies available</h2>
        </header>
    )
}

export default Header; 