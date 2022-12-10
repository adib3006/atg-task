import React from 'react';
import banner from '../assets/banner.jpg';
import arrow from '../assets/arrow.png';

const Banner = ({user}) => {
    return (
        <div>
            <div class="card bg-dark text-white">
                <img src={banner} class="card-img" alt="..." style={{ backgroundColor: "black", opacity: "0.45" }} />
                <div class="d-block d-md-none card-img-overlay d-flex align-items-start justify-content-between">
                    <img src={arrow} alt="" />
                    {user?.uid ? 
                    <button className='btn btn-outline-light'>Leave Group</button>
                    :
                    <button className='btn btn-outline-light'>Join Group</button>}
                </div>
                <div class="card-img-overlay d-flex align-items-end">
                    <div className='ms-1 ps-1 ms-md-5 ps-md-5'>
                        <p className='fs-4 fs-md-1 mb-0'>Computer Engineering</p>
                        <p className='mt-0 mb-0 mb-md-5'>142,765 Computer Engineers follow this</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;