import React from 'react';
import login from '../assets/login.PNG';

const Signup = () => {
    return (
        <div class="modal fade" id="signupModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
            <div class="modal-dialog modal-dialog-centered  modal-lg">
                <div class="modal-content">
                    <p className='bg-light text-success text-center rounded'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                    <div class="modal-body d-flex">
                        <div className='p-3 w-50'>
                            <h1>Create Account</h1>
                            <form className='mb-4'>
                                <div class="mt-3 d-flex">
                                    <input className='rounded-none border w-50 p-2' type="text" class="form-control" id="exampleFormControlInput1" placeholder="First Name" />
                                    <input className='rounded-none border w-50 p-2' type="text" class="form-control" id="exampleFormControlInput1" placeholder="Last Name" />
                                </div>
                                <div>
                                    <input className='rounded-none border w-100 p-2' type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                                </div>
                                <div class="mb-3">
                                    <input className='rounded-none border w-100 p-2' type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password" />
                                </div>
                                <button className='btn btn-primary rounded w-100'>Create Account</button>
                            </form>
                            <button className='btn btn-outline-secondary rounded w-100 mb-2'>Sign Up with Facebook
                            </button>
                            <button className='btn btn-outline-secondary rounded w-100'>Sign Up with Google</button>
                            <p className='text-center fw-bold mt-3'>Forgot Password ?</p>
                        </div>
                        <div className='p-3 w-50'>
                            <p>Already have an account?<span className='text-primary fw-semibold'> Sign In</span></p>
                            <img className='img-fuild' src={login} alt="" />
                            <small className='text-muted'>By signing up, you agree to our Terms & conditions, Privacy policy</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;