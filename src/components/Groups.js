import React from 'react';
import profile from '../assets/profile.jpg';

const Groups = () => {
    return (
        <div>
            <h4 className='my-4'>Recommended Groups</h4>
            <div className='d-flex align-items-center'>
                <img src={profile} className="rounded-circle me-2" style={{ width: "30px", height: "30px" }} alt="Avatar" />
                <p className='mt-3 me-5'>Computer Science</p>
                <button className='btn btn-outline btn-light btn-sm rounded bg-black text-white'>Followed</button>
            </div>
            <div className='d-flex align-items-center'>
                <img src={profile} className="rounded-circle me-2" style={{ width: "30px", height: "30px" }} alt="Avatar" />
                <p className='mt-3 me-5'>Computer Science</p>
                <button className='btn btn-outline btn-light btn-sm rounded'>Follow</button>
            </div>
            <div className='d-flex align-items-center'>
                <img src={profile} className="rounded-circle me-2" style={{ width: "30px", height: "30px" }} alt="Avatar" />
                <p className='mt-3 me-5'>Computer Science</p>
                <button className='btn btn-outline btn-light btn-sm rounded'>Follow</button>
            </div>
            <div className='d-flex align-items-center'>
                <img src={profile} className="rounded-circle me-2" style={{ width: "30px", height: "30px" }} alt="Avatar" />
                <p className='mt-3 me-5'>Computer Science</p>
                <button className='btn btn-outline btn-light btn-sm rounded'>Follow</button>
            </div>
            <div className='d-flex align-items-center'>
                <img src={profile} className="rounded-circle me-2" style={{ width: "30px", height: "30px" }} alt="Avatar" />
                <p className='mt-3 me-5'>Computer Science</p>
                <button className='btn btn-outline btn-light btn-sm rounded'>Follow</button>
            </div>
            <div className='d-flex align-items-center'>
                <img src={profile} className="rounded-circle me-2" style={{ width: "30px", height: "30px" }} alt="Avatar" />
                <p className='mt-3 me-5'>Computer Science</p>
                <button className='btn btn-outline btn-light btn-sm rounded'>Follow</button>
            </div>
        </div>
    );
};

export default Groups;