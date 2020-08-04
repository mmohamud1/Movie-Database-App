import React from 'react'
import { Link } from 'react-router-dom';
import Spinner from './Spinner'

const Movie = ({ movieInfo, loading }) => {
    //console.log(movieInfo);

    if (loading) return <Spinner />;
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
