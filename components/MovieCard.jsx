import "../css/MovieCard.css";
import {UseMovieContext} from "../Contexes/MovieContexts.jsx";

function MovieCard({ movie }) {
    const { isFavorite, removeFromFavorite, addToFavorite } = UseMovieContext();
    const favorite = isFavorite(movie.id);

    function handleClickFavorite(e) {
        e.preventDefault();
        if (favorite) removeFromFavorite(movie.id);
        else addToFavorite(movie);
    }

    return (
        <div className="movie" style={{ backgroundImage: `url(${movie.img})` }}>
            <div className="movie-overlay">
                <button
                    className={`overlay-btn ${favorite ? "active" : ""}`}
                    onClick={handleClickFavorite}>
                    ❤
                </button>
            </div>
            <div className="movie-info">
                <h4 className="movie-title">{movie.title}</h4>
                <p className="movie-intro">{movie.release}</p>
            </div>
        </div>
    );
}

export default MovieCard;
