import { Link, useLocation } from 'react-router-dom';
import { getMovies } from 'services/fakeAPI';

export const Home = () => {
  const movies = getMovies();
  const location = useLocation();

  return (
    <>
      <h1>Trending today</h1>
      {movies.map(movie => (
        <div key={movie.id}>
          <Link to={`movies/${movie.id}`} state={{ from: location }}>
            {movie.name}
          </Link>
        </div>
      ))}
    </>
  );
};
