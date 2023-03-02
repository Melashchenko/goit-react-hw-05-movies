import { BackLink } from 'components/BackLink/BackLink';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'services/API';

export const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);

  const moviePosterSrc = `https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`;

  useEffect(() => {
    getMovieDetails(movieId).then(details => {
      console.log(details);
      return setMovieDetails(details);
    });
  }, [movieId]);

  return (
    <>
      <BackLink to={backLinkHref}>Back to</BackLink>

      <div>
        <div>
          <img src={moviePosterSrc} alt={movieDetails.title} />
          <h2>{movieDetails.title}</h2>
          <p>
            Release date:{' '}
            {new Date(movieDetails.release_date).toLocaleDateString()}
          </p>
          <p>
            User Score: {Math.round(movieDetails.vote_average * 1000) / 100}%
          </p>
          <h3>Overview:</h3>
          <p> {movieDetails.overview}</p>
        </div>
        <div>
          <h1>Additional informational</h1>
          <ul>
            <li>
              <Link to="cast" state={location.state}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="revives" state={location.state}>
                Revives
              </Link>
            </li>
          </ul>
          <Outlet />
        </div>
      </div>
    </>
  );
};
