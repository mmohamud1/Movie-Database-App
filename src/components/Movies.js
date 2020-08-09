import React from 'react';
import Spinner from './Spinner';
import MovieItem from './MovieItem';

const Movies = ({ currentMovies, loading, getMovie }) => {
    
    if (loading) {
        return <Spinner />;
      } else {
        return (
          <div className="grid-3 my-3">
            {currentMovies.map(movie => (
              <MovieItem key={movie.id} movie={movie} getMovie={getMovie}/>
            ))}
          </div>
        );
      };
};

export default Movies;
