import { BackLink } from 'components/BackLink/BackLink';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { useParams, useLocation } from 'react-router-dom';
import { getMovieById } from 'services/API';

export const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const { movieId } = useParams();
  const [movieById, setMovieById] = useState([]);

  const moviePosterSrc = `https://image.tmdb.org/t/p/w342${movieById.poster_path}`;

  useEffect(() => {
    getMovieById(movieId).then(movie => {
      console.log(movie);
      return setMovieById(movie);
    });
  }, [movieId]);

  return (
    <>
      <BackLink to={backLinkHref}>Back to</BackLink>

      <div>
        <div>
          <img src={moviePosterSrc} alt={movieById.title} />
          <h2>{movieById.title}</h2>
          <p>
            Release date:{' '}
            {new Date(movieById.release_date).toLocaleDateString()}
          </p>
          <p>User Score: {Math.round(movieById.vote_average * 1000) / 100}%</p>
          <h3>Overview:</h3>
          <p> {movieById.overview}</p>
        </div>
        <div>
          <h1>Additional informational</h1>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="revives">Revives</Link>
            </li>
          </ul>
          <Outlet />
        </div>
      </div>
    </>
  );
};
