import React, { Fragment } from 'react';
import Search from '../components/Search';
import Movies from '../components/Movies';

const Home = ({ searchMovies, clearSearch, movies, loading, getMovie  }) => (
    <Fragment>
      <Search searchMovies={searchMovies} clearSearch={clearSearch} movies={movies}/>
      <Movies loading={loading} movies={movies} getMovie={getMovie} />
    </Fragment>
);
  
  export default Home;
