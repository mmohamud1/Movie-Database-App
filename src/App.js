import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Movie from './components/Movie'
import axios from 'axios'
import './App.css'


const App = () => {
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([]);
  const [movieInfo, setMovieInfo] = useState({});

  const apikey = '83f60c50'

  // Search Movies
  const searchMovies = async (input) => {
    try {
      setLoading(true)
      const res = await axios.get(`http://www.omdbapi.com/?apikey=${apikey}&s=${input}`)
      //console.log(res.data.Search);
      setMovies(res.data.Search);
      setLoading(false);
    } catch (err) {
      alert('3rd party API issue occured')
    }
  };

  // CLear Search
  const clearSearch = () => {
    setMovies([])
    setLoading(false)
  }

  // Get single movie information
  const getMovie = async (id) => {
    try {
      setLoading(true)
      const res = await axios.get(`http://www.omdbapi.com/?apikey=${apikey}&i=${id}`)
      console.log(res.data);
      setMovieInfo(res.data);
      setLoading(false);
    }catch (err) {
      alert('3rd party API issue occured')
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
            <Route exact path='/movie/:id' render={(props) => <Movie  movieInfo={movieInfo} />} />
          </Switch>       
        </div>
      </div>
    </Router>
  );
}

export default App;
