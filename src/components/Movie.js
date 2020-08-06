import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

const Movie = ({ movieInfo, loading }) => {
    //console.log(movieInfo);
    if (loading) return <Spinner />;
    return (
        <div>
            <Link to='/' className='btn btn-success'>
                &larr; Search
            </Link>
            <h1 className="text-center x-large font">{movieInfo.Title}</h1>
            <div className="grid-2 bg-container">
                <div className="all-center">
                    <img src={movieInfo.Poster} className="all-center mb-1" alt="poster" style={{ width: '250px' }} />
                    <p className="mb-1 badge badge-primary font">Released: {movieInfo.Released}</p>
                    <p className="mb-1 badge badge-primary font">Rated: {movieInfo.Rated}</p>
                    <p className="mb-1 badge badge-primary font">Runtime: {movieInfo.Runtime}</p>
                    <p className="mb-1 badge badge-primary font">Rating: {movieInfo.imdbRating}/10</p>
                </div>
                <div>
                    <h1 className="text-center mb-1 underline font">Description</h1>
                    <p className="large font">{movieInfo.Plot}</p>
                    <p className="medium mt-2 mb-1 font"><strong>Director:</strong> {movieInfo.Director}</p>
                    <p className="medium mb-1 font"><strong>Starring:</strong> {movieInfo.Actors}</p>
                    <p className="medium mb-1 font"><strong>Production:</strong> {movieInfo.Production}</p>
                    <p className="medium mb-1 font"><strong>Genre:</strong> {movieInfo.Genre}</p>
                    <p className="medium mb-1 font"><strong>Language:</strong> {movieInfo.Language}</p>
                    <p className="medium mb-1 font"><strong>Box Office:</strong> {movieInfo.BoxOffice}</p>
                </div>
            </div>
        </div>
    );
};

export default Movie;
