import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import axios from 'axios'
import './App.css'


const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true)

  const apikey = '83f60c50'

  // Search Movies
  const searchMovies = async (input) => {
    try {
      const res = await axios.get(`http://www.omdbapi.com/?apikey=${apikey}&s=${input}`)
      console.log(res.data.Search);
      setMovies(res.data.Search);
      setLoading(false);
    } catch (err) {
      alert('Movie is unavailiable please check search')
    }
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path='/' render={(props) => <Home searchMovies={searchMovies} movies={movies} />} searchMovies={searchMovies}/>
            <Route exact path='/about' component={About} />
          </Switch>       
        </div>
      </div>
    </Router>
  );
}

export default App;
