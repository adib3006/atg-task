import React from 'react';
import Login from './Login';
import Signup from './Signup';

const Categories = ({ user }) => {
    //const user = {};
    return (
        <>
            <div className='d-block d-md-none'>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='fw-bold mt-3'>Post(364)</p>
                    <div class="btn-group">
                        <button type="button" class="btn btn-light">Filter: All</button>
                        <button type="button" class="btn btn-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><p className="dropdown-item" type="button" data-bs-toggle="modal" data-bs-target="#loginModal">
                                Login
                            </p>
                            </li>
                            <li><p className="dropdown-item" type="button" data-bs-toggle="modal" data-bs-target="#signupModal">
                                Sign Up
                            </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <Login></Login>
                <Signup></Signup>
            </div>
            <div className='d-none d-md-block'>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex '>
                        <a href='#id' return="false" className='text-decoration-none me-2 text-black'>All Posts(32)</a>
                        <a href='#id' return="false" className='text-decoration-none me-2 text-muted'>Article</a>
                        <a href='#id' return="false" className='text-decoration-none me-2 text-muted'>Event</a>
                        <a href='#id' return="false" className='text-decoration-none me-2 text-muted'>Education</a>
                        <a href='#id' return="false" className='text-decoration-none me-2 text-muted'>Job</a>
                    </div>
                    <div className='d-flex'>
                        <div class="dropdown me-1">
                            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                write a post
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="/">Action</a></li>
                                <li><a class="dropdown-item" href="/">Another action</a></li>
                                <li><a class="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                        </div>
                        {user?.uid ?
                            <button className='btn btn-outline-secondary'>- Leave Group</button>
                            :
                            <button className='btn btn-primary'>+ Join Group</button>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Categories;