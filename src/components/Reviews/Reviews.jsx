import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/API';

const Reviews = () => {
  const { movieId } = useParams();

  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(reviews => {
      return setMovieReviews(reviews.results);
    });
  }, [movieId]);

  return (
    <>
      {movieReviews.length === 0 && (
        <h3>We don't have any reviews for this movie</h3>
      )}
      {movieReviews.map(review => (
        <div key={review.id}>
          <h3>Author: {review.author}</h3>
          <p> {review.content} </p>
        </div>
      ))}
    </>
  );
};

export default Reviews;
