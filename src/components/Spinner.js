import React from 'react';
import spinner from '../img/spinner 2.gif';

const Spinner = () => {
    return (
        <div>
            <img src={spinner} style={{ width: '100px', margin: '100px auto', display: 'block'}} alt='loading' />
        </div>
    );
};

export default Spinner;