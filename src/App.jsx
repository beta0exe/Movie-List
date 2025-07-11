import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "../components/Home.jsx";
import Favorites from "../components/Favorites.jsx";
import NavBar from "../components/NavBar.jsx";
import { MovieContextProvider } from "../Contexes/MovieContexts.jsx";
import Footer from "../components/Footer.jsx";

function App() {
    return (
        <MovieContextProvider>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Favorites" element={<Favorites />} />
                </Routes>
                <Footer />
            </div>
        </MovieContextProvider>

    );
}

export default App;
