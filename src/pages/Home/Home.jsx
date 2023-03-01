import { MoviesList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';

import { getTrendingMovies } from 'services/API';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(movies => {
      return setMovies(movies.results);
    });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </>
  );
};
