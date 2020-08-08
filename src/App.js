import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Movie from './components/Movie';
import axios from 'axios';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movieInfo, setMovieInfo] = useState({});

  const apiKey = '0e00fa005cf175e7c9a779ef26eb58b2';

  // search Movies 
  const searchMovies = async (input) => {
    try {
      setLoading(true)
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${input}&page=1&include_adult=false`)
      //console.log(res.data.results);
      setMovies(res.data.results);
      setLoading(false);
    } catch (err) {
      alert('Movie is unavailable');
    } 
  }

  // CLear Search
  const clearSearch = () => {
    setMovies([]);
    setLoading(false);
  };
  
  // Get single movie info
  const getMovie = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`);
      console.log(res.data);
      setMovieInfo(res.data)
      setLoading(false);
    } catch (err) {
      alert('No information available');
    }
  };
  


  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path='/' render={(props) => <Home searchMovies={searchMovies} movies={movies} loading={loading} clearSearch={clearSearch} getMovie={getMovie} />} />
            <Route exact path='/about' component={About} />
            <Route exact path='/movie/:id' render={(props) => <Movie  movieInfo={movieInfo} loading={loading} />} />
          </Switch>       
        </div>
      </div>
    </Router>
  );
};

export default App;
