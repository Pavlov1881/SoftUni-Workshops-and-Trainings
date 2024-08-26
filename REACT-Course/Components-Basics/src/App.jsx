import MovieList from "./components/MovieList"
import movies from "./assets/movies"

function App() {

    return (
        <>
            <h1>My First React Dynamic Application</h1>
            <MovieList moviesArray = {movies} headingText="Movie List" secondaryText="Some text here" />
        </>
    )
}

export default App
