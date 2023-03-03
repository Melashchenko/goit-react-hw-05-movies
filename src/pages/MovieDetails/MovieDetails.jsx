import { BackLink } from 'components/BackLink/BackLink';
import { Container } from 'components/MovieList/MovieList.styled';
import { useEffect, useState, Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'services/API';

const MovieDetails = () => {
  const params = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  const [movieDetails, setMovieDetails] = useState([]);

  const poster = movieDetails.poster_path
    ? `https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`
    : require('services/no-poster.png');

  useEffect(() => {
    getMovieDetails(params.movieId).then(details => {
      return setMovieDetails(details);
    });
  }, [params.movieId]);

  const { title, release_date, vote_average, overview } = movieDetails;

  return (
    <>
      <BackLink to={backLinkHref}>Back to</BackLink>

      <div>
        <Container>
          <Container>
            <img src={poster} alt={title} />
          </Container>
          <div>
            <h2>{title}</h2>
            <p>Release date: {new Date(release_date).toLocaleDateString()}</p>
            <p>User Score: {Math.round(vote_average * 1000) / 100}%</p>
            <h3>Overview:</h3>
            <p> {overview}</p>
          </div>
        </Container>
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
          <Suspense fallback={<div>Loading ...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
