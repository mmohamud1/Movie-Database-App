import React from 'react'
import { Link } from 'react-router-dom';

const Movie = ({ movieInfo }) => {
    //console.log(movieInfo);
    return (
        <div>
            <Link to='/' className='btn btn-danger'>
                &larr; Search
            </Link>
            <h1>{movieInfo.Title}</h1>
            
        </div>
    )
}

export default Movie
