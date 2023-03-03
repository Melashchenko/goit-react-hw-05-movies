import { useEffect, useState } from 'react';
import { getMovieCredits } from 'services/API';
import { useParams } from 'react-router-dom';
import { Container } from 'components/MovieList/MovieList.styled';

const Cast = () => {
  const { movieId } = useParams();

  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(credits => {
      return setMovieCast(credits.cast);
    });
  }, [movieId]);

  return (
    <Container>
      {movieCast.map((actor, index) => {
        const poster = actor.profile_path
          ? `https://image.tmdb.org/t/p/w342${actor.profile_path}`
          : require('services/no-poster.png');

        return (
          <div key={index}>
            <img src={poster} alt={actor.name} />
            <h3>Name: {actor.name}</h3>
            <p>Character: {actor.character}</p>
          </div>
        );
      })}
    </Container>
  );
};

export default Cast;
