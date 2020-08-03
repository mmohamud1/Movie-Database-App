import React, { useState } from 'react'

const Search = ({ searchMovies }) => {
    const [text, setText] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
          alert('Please enter something');
        } else {
          searchMovies(text);
          setText('');
        }
      };

    const onChange = e => setText(e.target.value);

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input  type="text" name="text" placeholder="  Search Movies..." value={text} onChange={onChange}/>
                <input type="submit" value="search" className="btn btn-dark btn-block"/>
            </form>
            
        </div>
    )
}

export default Search
