import {convertDate, generateImageUrl, calculatePopularity} from "./utils";


export const renderMovies = movies => (`
  <div class="container">
    <section>
      <h2 class="section-title">popular</h2>
      <div class="poplular d-flex offset-mr">
        ${movies.map(movie => renderMovie(movie)).join('')}
      </div>
    </section>
  </div>
`);

export const renderMovie = ({id, title, poster_path, popularity, release_date}) => (`
  <div class="movie">
    <a href="#movieId=${id}">
      <img class="poster" src="${generateImageUrl(poster_path)}" alt="${title}" loading="lazy">
    </a>
    <span class="popularity">
        <span class="rate">rate</span>
        ${calculatePopularity(popularity)}
    </span>
    <a href="#movieId=${id}">
      <span class="title">${title}</span>
    </a>
    <span class="date">${convertDate(release_date)}</span>
  </div>
`);

export const renderDetails = ({id, title, poster_path, popularity, release_date}) => (`
  <div class="movie">
    <a href="#movieId=${id}">
      <img class="poster" src="${generateImageUrl(poster_path)}" alt="${title}" loading="lazy">
    </a>
    <span class="popularity">
        <span class="rate">rate</span>
        ${calculatePopularity(popularity)}
    </span>
    <span class="title">${title}</span>
    <span class="date">${convertDate(release_date)}</span>
  </div>
`);

export const renderError = ({status_code , status_message}) => (`
  <div class="container">
    <div class="error">
      <h2>Status code: ${status_code}</h2>
      <p>Status message: ${status_message}</p>
    </div>
  </div>
`);

export const renderSearch = ({title, poster_path, popularity, release_date}) => (`
  <div class="container">
  <section>
    <h2 class="section-title">Search results</h2>
    <div class="poplular d-flex offset-mr">
      ${title.map(movie => renderMovie(movie)).join('')}
    </div>
  </section>
  </div>
`);
