import React from 'react';
import login from '../assets/login.PNG';

const Login = () => {
    return (
        <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <p className='bg-light text-success text-center rounded'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                    <div class="modal-body d-flex">
                        <div className='p-3 w-100 w-md-50'>
                            <h1 className='d-none d-md-block'>Sign In</h1>
                            <h1 className='d-block d-md-none'>Welcome Back</h1>
                            <form className='mb-4'>
                                <div className='mt-3'>
                                    <input className='rounded-none border w-100 p-2' type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                                </div>
                                <div class="mb-3">
                                    <input className='rounded-none border w-100 p-2' type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password" />
                                </div>
                                <button className='btn btn-primary rounded w-100'>Sign In</button>
                            </form>
                            <button className='btn btn-outline-secondary rounded w-100 mb-2'>Sign In with Facebook</button>
                            <button className='btn btn-outline-secondary rounded w-100'>Sign In with Google</button>
                            <p className='text-center fw-bold mt-3'>Forgot Password ?</p>
                        </div>
                        <div className='p-3 d-none d-md-inline w-50'>
                            <p>Don’t have an account yet? <span className='text-primary fw-semibold'>Create new for free!</span></p>
                            <img className='img-fuild' src={login} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;