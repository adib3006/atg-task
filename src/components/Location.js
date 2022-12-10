import React from 'react';

const Location = () => {
    return (
        <div>
            <input className='border-0 p-0 m-0' type="text" defaultValue="Noida, India" />
            <hr />
            <br />
            <span className='border rounded-circle text-muted px-2'>!</span>
            <p className='text-muted d-inline'>Your location will help us serve better and extend a personalised experience.</p>
        </div>
    );
};

export default Location;