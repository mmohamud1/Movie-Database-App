import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/kisspng-cinema-film-movie-theatre-5ac068632302c2.1016541515225590751434.png';


const MovieItem = ({ movie, getMovie }) => {
    const moreInfo = () => getMovie(movie.id);
    const posterSrc = `http://image.tmdb.org/t/p/w342${movie.poster_path}`
    const releaseYear = movie.release_date.split('-');  

    if(movie.poster_path === null) {
        return (
            <div className="card round-corner-img">
                <div className="card-inner round-corner-img">
                    <div className="card-front round-corner-img">
                        <img className="round-corner-img generic" src={Logo} alt="Movie img unavailable"/>
                    </div>
                    <div className="card-back round-corner-img">
                        <h1>{movie.title} ({releaseYear[0]})</h1>
                        <Link to={`/movie/${movie.id}`} className='btn .btn-light btn-sm my-1' onClick={moreInfo} >
                            More Info
                        </Link>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="card round-corner-img">
                <div className="card-inner round-corner-img">
                    <div className="card-front round-corner-img">
                        <img className="round-corner-img" src={posterSrc} alt="Movie img unavailable"/>
                    </div>
                    <div className="card-back round-corner-img">
                        <h1>{movie.title} ({releaseYear[0]})</h1>
                        <Link to={`/movie/${movie.id}`} className='btn .btn-light btn-sm my-1' onClick={moreInfo} >
                            More Info
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
};

export default MovieItem;
