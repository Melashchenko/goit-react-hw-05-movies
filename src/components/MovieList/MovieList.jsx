import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  console.log(movies);
  return (
    <>
      {movies.map(movie => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </div>
      ))}
    </>
  );
};
