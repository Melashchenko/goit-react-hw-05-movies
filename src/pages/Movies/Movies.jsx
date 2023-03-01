import { MoviesList } from 'components/MovieList/MovieList';
import { SearchBox } from 'components/SearchBox/SearchBox';

import { useEffect, useState } from 'react';
import { getSearchMovie } from 'services/API';

export const Movies = () => {
  const [searchMovies, setSearchMovies] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getSearchMovie(searchMovies).then(movies => {
      console.log(movies);
      return setMovies(movies.results);
    });
  }, [searchMovies]);

  const handleFormSubmit = moviesName => {
    if (moviesName === searchMovies) {
      return;
    }

    setSearchMovies(moviesName);
  };

  return (
    <>
      <SearchBox onSubmit={handleFormSubmit} />
      <MoviesList movies={movies} />
    </>
  );
};
