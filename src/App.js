import {useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`;

const movie1 = 
    {
        "Title": "Batman & Robin",
        "Year": "1997",
        "imdbID": "tt0118688",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYzU3ZjE3M2UtM2E4Ni00MDI5LTkyZGUtOTFkMGIyYjNjZGU3XkEyXkFqcGc@._V1_SX300.jpg"
    };

const App = () => {


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Batman');
    }, []);

    return (
        <>
            <div className="app">
                <h1>Movie Land</h1>
            </div>

            <div className="search">
                <input placeholder="Search For Movies" value="Batman"
                onChange={() => {}}
                />
                <img src={SearchIcon} alt="Search" />
            </div>

            <div className='container'>
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;