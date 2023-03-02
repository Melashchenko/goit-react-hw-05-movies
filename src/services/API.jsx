const baseURL = 'https://api.themoviedb.org/3/';
const KEY = '532b3122039bc5d97d2bdc19adad4ecb';

export const getTrendingMovies = async () => {
  const response = await fetch(`${baseURL}trending/movie/day?api_key=${KEY}`);
  const promise = await response.json();

  return promise;
};

export const getSearchMovie = async searchQuery => {
  const response = await fetch(
    `${baseURL}/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`
  );
  const promise = await response.json();

  return promise;
};

export const getMovieDetails = async movieId => {
  const response = await fetch(
    `${baseURL}movie/${movieId}?api_key=${KEY}&language=en-US`
  );

  const promise = await response.json();

  return promise;
};

export const getMovieCredits = async movieId => {
  const response = await fetch(
    `${baseURL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  const promise = await response.json();

  return promise;
};

export const getMovieReviews = async movieId => {
  const response = await fetch(
    `${baseURL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  const promise = await response.json();

  return promise;
};
