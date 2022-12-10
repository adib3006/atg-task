import React from 'react';
import profile from '../assets/profile.jpg';
import Login from './Login';
import Signup from './Signup';

const TopNavbar = ({user}) => {
    // const user = {};
    return (
        <nav className="navbar navbar-expand-lg navbar-light px-5">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><span className='text-success'>ATG.</span>World</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex ms-auto w-25">
                        <input className="form-control me-2 fs-6" type="search" placeholder="Search your favorite groups in ATG" aria-label="Search" />
                    </form>
                    {user?.uid ?
                        <div className='ms-auto d-flex'>
                            <img src={profile} className="rounded-circle me-2" style={{ width: "48px", height: "48px" }} alt="Avatar" />
                            <p className='pt-2'>Shiddharth Goyal</p>
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className='text-primary'></span>
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/">Sign Out</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        :
                        <div className='ms-auto d-flex'>
                            <p className='pt-2'>Create account.</p>
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className='text-primary'>It's free!</span>
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><p className="dropdown-item" type="button" data-bs-toggle="modal" data-bs-target="#loginModal">
                                            Login
                                            </p>
                                        </li>
                                        <li><p className="dropdown-item" type="button" data-bs-toggle="modal" data-bs-target="#signupModal">
                                            Sign Up
                                            </p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>}
                    <Login></Login>
                    <Signup></Signup>
                </div>
            </div>
        </nav>
    );
};

export default TopNavbar;