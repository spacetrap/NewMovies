import {getMovieDetails, getMovies, getMovieSearch} from "./api";

window.addEventListener('hashchange', e => {
    const {location: {hash}} = window;
    const [_, movieId] = hash.split('=');

    getMovieDetails(movieId, '.root');
    checkUrl()
})

document.getElementById('submitSearch').addEventListener('click', () => {
    window.location.hash = '#search=' + document.getElementById('search').value
    searchMovie(searchInput.value, '.root');
})

const checkUrl = () => {
    const {location: {hash}} = window;
    const [hashName, movieId] = hash.split('=');
    console.log(movieId);

    if (hashName === '#movieId') {
        getMovieDetails(movieId, '.root');
    } else if (hashName === '#search') {
        getMovieSearch(`/search/movie?query=${movieId}`, '.root')
    } else {
        getMovies('popular', '.root')
    }
}
checkUrl();
// getMovies('popular', '.root');
// getMovie('', '.root')
// getMovies('top_rated', '.top-rated');
// getMovies('upcoming', '.upcoming');