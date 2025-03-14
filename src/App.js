import {useEffect} from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`;

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data);
    }

    useEffect(() => {
        searchMovies('Batman');
    }, []);

    return (
        <h1>hi</h1>
    );
}

export default App;