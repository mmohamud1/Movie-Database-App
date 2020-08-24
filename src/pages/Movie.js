import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';


const Movie = ({ movieInfo, loading, getCast, cast, formatMoney }) => {
    const posterSrc = `http://image.tmdb.org/t/p/w342${movieInfo.poster_path}`

    // reduce the amount of cast memebers 
    const castMembers = cast.slice(0,5);
    
    let { id } = useParams();
    useEffect(() => {
        getCast(id)
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    if (loading) return <Spinner />;
    return (
        <div>
            <Link to='/' className='btn btn-success'>
                &larr; Search
            </Link>
            <h1 className="text-center x-large font py-1 bold">{movieInfo.original_title}</h1>
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
                    <p className="large font ">{movieInfo.overview}</p>
                    <p className="medium mb-1 mt-1 font"><strong>Produced By:</strong> {movieInfo.production_companies[0].name}</p>
                    <p className="medium mb-1 font"><strong>Budget:</strong> {formatMoney(movieInfo.budget)}</p>  
                    <p className="medium mb-1 font"><strong>Revenue:</strong> {formatMoney(movieInfo.revenue)}</p>  
                </div>
            </div>
            <div className="bg-container">           
                {castMembers.map(member =>(
                    <img key={member.cast_id} className="round-corner-img cast-img" src={`http://image.tmdb.org/t/p/w185${member.profile_path}`} alt="cast-member"  />   
                ))}
            </div>
        </div>
    );
};

export default Movie;
