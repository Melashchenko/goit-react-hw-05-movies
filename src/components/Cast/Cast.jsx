import { useEffect, useState } from 'react';
import { getMovieCredits } from 'services/API';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();

  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(credits => {
      console.log(credits);
      return setMovieCast(credits.cast);
    });
  }, [movieId]);

  return (
    <>
      {movieCast.map((actor, index) => (
        <div key={index}>
          <img
            src={`https://image.tmdb.org/t/p/w342${actor.profile_path}`}
            alt={actor.name}
          />
          <h3>Name: {actor.name}</h3>
          <p>Character: {actor.character}</p>
        </div>
      ))}
    </>
  );
};
