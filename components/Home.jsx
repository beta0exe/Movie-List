import MovieCard from "./MovieCard.jsx";
import "../css/Home.css"
import {useState} from "react";

function Home() {
    const Movie_List = [
        { id: 1, title: "Batman", release: "1998", img: "/b1165182390d3f582ba15b2af8aff8fb.jpg" },
        { id: 2, title: "Spider Man", release: "1998", img: "/b1165182390d3f582ba15b2af8aff8fb.jpg" },
        { id: 3, title: "Last Of Us", release: "1998", img: "/b1165182390d3f582ba15b2af8aff8fb.jpg" },
        { id: 4, title: "Lucifer", release: "1998", img: "/b1165182390d3f582ba15b2af8aff8fb.jpg" },
        { id: 5, title: "John Wick", release: "1998", img: "/b1165182390d3f582ba15b2af8aff8fb.jpg" },
        { id: 6, title: "Fast And Furious", release: "1998", img: "/b1165182390d3f582ba15b2af8aff8fb.jpg" },
    ];
    const [moviesSearchQuery, setMoviesSearchQuery] = useState("");

    const SearchMovies = (query) => {
        query.preventDefault()
        window.alert(moviesSearchQuery)
        setMoviesSearchQuery("")
    };


    return <div className='home'>
        <form className="searchbar-container" onSubmit={SearchMovies}>
            <input className="searchbar" placeholder="Search Movies..." type="text" value={moviesSearchQuery} onChange={(text)=>setMoviesSearchQuery(text.target.value)} />
            <button className="searchbar-btn">Search Movies</button>
        </form>
        <div className="video-cards-container">
            {Movie_List.map((movie) =>
                    movie.title.toLocaleLowerCase().startsWith(moviesSearchQuery.toLowerCase()) &&
                    (<MovieCard key={movie.id} movie={movie}/>)
            )
            }
        </div>
    </div>
}

export default Home


// 2px solid #3C40C6