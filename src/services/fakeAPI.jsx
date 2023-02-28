const movies = [
  { id: 'h-1', name: 'Hobbit 1' },
  { id: 'h-2', name: 'Hobbit 2' },
  { id: 'h-3', name: 'Hobbit 3' },
  { id: 's-1', name: 'Sneaks 1' },
  { id: 's-2', name: 'Sneaks 2' },
  { id: 's-3', name: 'Sneaks 3' },
  { id: 's-4', name: 'Sneaks 4' },
  { id: 'p-1', name: 'Parents 1' },
  { id: 'p-2', name: 'Parents 2' },
  { id: 'p-3', name: 'Parents 3' },
];

export const getMovies = () => {
  return movies;
};

export const getMoviesById = movieId => {
  return movies.find(movie => movie.id === movieId);
};
