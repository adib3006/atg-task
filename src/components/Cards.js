import React from 'react';
import cover from '../assets/cover.jpg';
import profile from '../assets/profile.jpg';
import share from '../assets/share.png';

const Cards = () => {
    return (
        <div>
            <div class="card mb-3">
                <img src={cover} class="card-img-top" alt="..." />
                <div class="card-body">
                    <p className='fw-bold'>Article</p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h5 class="card-title">What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                        <div class="dropdown me-1">
                            <button class="btn mt-0 pt-0 fw-bold dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                ...
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="/">Edit</a></li>
                                <li><a class="dropdown-item" href="/">Report</a></li>
                                <li><a class="dropdown-item" href="/">Option 3</a></li>
                            </ul>
                        </div>
                    </div>
                    <p class="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
                    </p>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center'>
                            <img src={profile} className="rounded-circle me-2" style={{width: "48px", height:"48px"}} alt="Avatar" />
                            <p className='fw-bold mt-3'>John Wick</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <p className='text-muted mt-3 me-5'>1.4k views</p>
                            <button className='btn btn-light'><img src={share} style={{width: "10px", height:"10px"}} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;