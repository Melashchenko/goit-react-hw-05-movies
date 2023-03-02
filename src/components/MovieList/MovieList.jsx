import { Link, useLocation } from 'react-router-dom';
import { Container } from './MovieList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      {movies.map(movie => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
            />
          </Link>
        </div>
      ))}
    </Container>
  );
};
