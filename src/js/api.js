import {generateApiUrl} from './utils';
import {renderMovies, renderError} from './templates';

export const getMovies = (path, selector) => {
  fetch(generateApiUrl(path))
    .then(res => res.json())
    // .then(({results, status_message, status_code}) => {
    .then(data  => {
      console.log('results', data.results)
      const root = document.querySelector(selector);
  

      if (data.status_message && data.status_code) {
        root.innerHTML = renderError({ status_code: data.status_code, status_message: data.status_message});
      } else {
        root.innerHTML = renderMovies(data.results);
      }
      // const movies = renderMovies(results);

      // document.querySelector(selector).insertAdjacentHTML('beforeend', movies);
    });
}

export const getMovie = (path, selector) => {
  fetch(generateApiUrl(path))
    .then(res => res.json())
    .then(data => {

      console.log('data', data);
      const root = document.querySelector(selector);

      if (data.status_message && data.status_code) {
        root.innerHTML = renderError({status_code: data.status_code, status_message: data.status_message});
      } 
    });
}

export const getMovieDetails = (path, selector) => {
  fetch(generateApiUrl(path))
    .then(res => res.json())
    .then(data => {

      const root = document.querySelector(selector);

      if (data.status_message && data.status_code) {
        root.innerHTML = renderError({status_code: data.status_code, status_message: data.status_message});
      } else {
        root.innerHTML = renderDetails(data);
      } 
    });
}

// export const getSearch = (query, selector) => {
//   fetch(generateApiUrl(query))
//     .then(res => res.json())
//     .then(data => {

//       const root = document.querySelector(selector);

//       if (data.status_message && data.status_code) {
//         root.innerHTML = renderError({status_code: data.status_code, status_message: data.status_message});
//       } else {
//         root.innerHTML = renderDetails(data);
//       } 
//     });
// }