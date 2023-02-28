import { useSearchParams } from 'react-router-dom';

import { MoviesList } from 'components/MovieList/MovieList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { getMovies } from 'services/fakeAPI';

export const Movies = () => {
  const movies = getMovies();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  const visibleMovies = movies.filter(movie =>
    movie.name.toLowerCase().includes(movieName.toLowerCase())
  );

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <SearchBox value={movieName} onChange={updateQueryString} />
      <MoviesList movies={visibleMovies} />
    </>
  );
};
