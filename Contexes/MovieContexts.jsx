import {createContext,useEffect,useState,useContext} from "react";


const MovieContext = createContext()

export const UseMovieContext = () => useContext(MovieContext)

export const MovieContextProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites)
            setFavorites(JSON.parse(storedFavorites));
    }, [])

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    const addToFavorite = (movies) => {
        setFavorites(prev => [...prev, movies])
    }
    const removeFromFavorite = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }
    const isFavorite = (movieId) => {
        return favorites.some(favorite => favorite.id === movieId)
    }
    const value = {
        favorites,
        addToFavorite,
        removeFromFavorite,
        isFavorite,
    }
    return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
}

