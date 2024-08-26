export default function MovieList(props) {

    console.log(props)

    return (
        <div className="movie-list">

            <h2>{props.headingText}</h2>
            <ul>
                <li>{props.moviesArray[0].title}</li>
                <li>{props.moviesArray[1].title}</li>
                <li>{props.moviesArray[2].title}</li>
            </ul>
        </div>
    );
}