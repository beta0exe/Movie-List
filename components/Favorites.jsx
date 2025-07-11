import "../css/Favorites.css"
import {UseMovieContext} from "../Contexes/MovieContexts.jsx";
import MovieCard from "./MovieCard.jsx";



function Favorites() {
    const {favorites} = UseMovieContext();
    if (favorites) {
        return(
            <div className="Favorites">
                <h2>Your Favorites</h2>
                <div className="video-cards-container">
                {favorites.map((movie) =>
                    (<MovieCard key={movie.id} movie={movie}/>)
                )
                }
            </div>
            </div>
        )
    }
    return (
        <div className="Favorites">
            <div className="Favorites-container"><span>
                <h1 className="favorite-title">Your Favorite Movies</h1>
                <p className="favorite-text"> Like Your Movies And We Will Add Them Here For You :)</p>
            </span>
            </div>
        </div>
    )
}


export default Favorites;