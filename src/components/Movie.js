import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

const Movie = ({ movieInfo, loading }) => {
    const posterSrc = `http://image.tmdb.org/t/p/w342${movieInfo.poster_path}`
    //console.log(movieInfo);

    if (loading) return <Spinner />;
    return (
        <div>
            <Link to='/' className='btn btn-success'>
                &larr; Search
            </Link>
            <h1 className="text-center x-large font py-1">{movieInfo.original_title}</h1>
            <div className="grid-2 bg-container">
                <div >
                    <img src={posterSrc} className="all-center mb-1" alt="poster" style={{ width: '250px' }} />
                    <div className="all-center">
                        <p className="mb-1 badge badge-primary font">Released: {movieInfo.release_date}</p>
                        <p className="mb-1 badge badge-primary font">Runtime: {movieInfo.runtime}m</p>
                        <p className="mb-1 badge badge-primary font">Rating: {movieInfo.vote_average}/10</p>
                        <p className="mb-1 badge badge-primary font">Language: {movieInfo.spoken_languages[0].name}</p>
                    </div>
                </div>
                <div className="all-center">
                    <p className="large font">{movieInfo.overview}</p>     
                </div>
            </div>
        </div>
    );
};

export default Movie;
