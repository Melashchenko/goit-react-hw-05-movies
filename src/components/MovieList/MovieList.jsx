import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  console.log(location.state);
  return (
    <>
      {movies.map(movie => (
        <div key={movie.id}>
          <Link to={`${movie.id}`} state={{ from: location }}>
            {movie.name}
          </Link>
        </div>
      ))}
    </>
  );
};
