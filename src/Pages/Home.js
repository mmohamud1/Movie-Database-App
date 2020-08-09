import React, { Fragment } from 'react';
import Search from '../components/Search';
import Movies from '../components/Movies';
import Pagination from '../components/Pagination'

const Home = ({ searchMovies, clearSearch, movies, paginate, moviesPerPage, loading, getMovie, currentMovies }) => (
    <Fragment>
      <Search searchMovies={searchMovies} clearSearch={clearSearch} movies={movies}/>
      <Movies loading={loading} movies={movies} currentMovies={currentMovies}  paginate={paginate} getMovie={getMovie} />
      <Pagination moviesPerPage={moviesPerPage} totalMovies={movies.length} paginate={paginate}/>
    </Fragment>
);
  
  export default Home;
