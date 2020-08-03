import React, { Fragment } from 'react';
import Search from '../Search'

const Home = ({ searchMovies }) => (
    <Fragment>
      <Search searchMovies={searchMovies}/>
    </Fragment>
);
  
  export default Home;