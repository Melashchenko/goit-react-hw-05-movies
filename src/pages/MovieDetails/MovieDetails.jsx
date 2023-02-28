import { BackLink } from 'components/BackLink/BackLink';
import { Link, Outlet } from 'react-router-dom';

import { useParams, useLocation } from 'react-router-dom';
import { getMoviesById } from 'services/fakeAPI';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const movie = getMoviesById(movieId);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  console.log(location.state);

  return (
    <>
      <BackLink to={backLinkHref}>Back to</BackLink>

      <div>
        <h2>
          Product - {movie.name} - {movieId}
        </h2>
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
    </>
  );
};
