import {useState, useEffect} from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`;



const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchItem, setSearch] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('');
    }, []);

    return (
        <>
            <div className="app">
                <h1>Movie Land</h1>
            </div>

            <div className="search">
                <input placeholder="Search For Movies" value={searchItem}
                onChange={(e) => setSearch(e.target.value)}
                />
                <img src={SearchIcon} alt="Search" onClick={() => searchMovies(searchItem)} />
            </div>

            {movies?.length > 0 ? (
                <div className='container'>
                   {movies.map((movie) => 
                    (<MovieCard movie={movie}/>)
                   )}
                </div>
            ): (
                <div className ="empty">
                    <h2>No Movies found</h2>
                </div>
            )}
        </>
    );
}

export default App;