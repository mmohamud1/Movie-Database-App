import React from 'react'
import { Link } from 'react-router-dom';

const MovieItem = ({ movie, getMovie  }) => {
    const moreInfo = () => getMovie(movie.imdbID);

    return (
        <div className="card round-corner-img">
            <div className="card-inner round-corner-img">
                <div className="card-front round-corner-img">
                    <img className="round-corner-img" src={movie.Poster} alt="Movie img unavailable"/>
                </div>
                <div className="card-back round-corner-img">
                    <h1>{movie.Title} ({movie.Year})</h1>
                    <Link to={`/movie/${movie.imdbID}`} className='btn .btn-light btn-sm my-1' onClick={moreInfo} >
                        More Info
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MovieItem
