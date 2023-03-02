import { MoviesList } from 'components/MovieList/MovieList';
import { SearchBox } from 'components/SearchBox/SearchBox';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/API';

export const Movies = () => {
  const [searchMovies, setSearchMovies] = useState('');
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchMovies === '') {
      return setSearchMovies(queryName);
    }
    getSearchMovie(searchMovies).then(movies => {
      console.log(movies);
      return setMovies(movies.results);
    });
  }, [searchMovies]);

  const handleFormSubmit = e => {
    e.preventDefault();

    setSearchMovies(queryName);
  };

  const changeQuery = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <>
      <SearchBox
        value={queryName}
        onSubmit={handleFormSubmit}
        onChange={changeQuery}
      />
      <MoviesList movies={movies} />
    </>
  );
};
