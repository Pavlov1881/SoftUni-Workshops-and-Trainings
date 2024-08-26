import MovieList from "./components/MovieList"

const movies = [
    {
        title: 'The Matrix',
        description: 'Some description here'
    }, {
        title: 'Man of Steel',
        description: 'Some description here'
    }, {
        title: 'Harry Potter',
        description: 'Some description here'
    },
]



function App() {

    return (
        <>
            <h1>My First React Dynamic Application</h1>
            <MovieList headingText="Movie List" secondaryText="Some text here" />
        </>
    )
}

export default App
