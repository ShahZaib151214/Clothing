import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; 
import { assets } from '../../assets/Assets/Asset';

const Login = () => {
    const [state,setstate] = useState('Login')
    return (
        <div className="login-container d-flex justify-content-center align-items-center vh-100" >
            <img src={assets.loginbg} alt="" />
            {state === 'Login'?(
            <div className="login-box text-center bg-transparent shadow-none">
                <h1>Login</h1>
                <p>Please enter your Login and your Password</p>
                <form>
                    <div className="mb-3 position-relative">
                        <i className="fa fa-user position-absolute" style={{ left: '10px', top: '50%', transform: 'translateY(-50%)', fontSize: '18px', color: 'black' }}></i>
                        <input 
                            type="text" 
                            className="form-control login-input" 
                            placeholder="Username or Email" 
                            name="username" 
                            required 
                            style={{backgroundColor:'transparent', border:'2px solid black'}}
                        />
                    </div>
                    <div className="mb-3 position-relative">
                        <i className="fa fa-lock position-absolute" style={{ left: '10px', top: '50%', transform: 'translateY(-50%)', fontSize: '18px', color: '#666' }}></i>
                        <input 
                            type="password" 
                            className="form-control login-input" 
                            placeholder="Password" 
                            name="password" 
                            required 
                            style={{backgroundColor:'transparent', border:'2px solid black'}}
                        />
                    </div>
                    <a href="#" className="d-block text-end mb-3">Forgot password?</a>
                    <button type="submit" className="btn btn-dark w-100 mb-2">Login</button>
                    <button type="button" className="btn btn-outline-dark w-100 mb-2"><img src={assets.google} />Or, sign-in with Google</button>
                    <p className="mt-2">
                        Not a member yet? <a href="#" onClick={() => setstate('Sign Up')}>Register!</a>
                    </p>
                </form>
            </div>):
                      ( <div className="login-box text-center bg-transparent shadow-none">
                        <h1>Sign Up here</h1>
                        <p>Create Accoount here</p>
                        <form>
                            <div className="mb-3 position-relative">
                                <i className="fa fa-user position-absolute" style={{ left: '10px', top: '50%', transform: 'translateY(-50%)', fontSize: '18px', color: '#666' }}></i>
                                <input 
                                    type="text" 
                                    className="form-control login-input" 
                                    placeholder="Username or Email" 
                                    name="username" 
                                    required 
                                    style={{backgroundColor:'transparent', border:'2px solid black'}}
                                />
                            </div>
                            <div className="mb-3 position-relative">
                                <i className="fa fa-lock position-absolute" style={{ left: '10px', top: '50%', transform: 'translateY(-50%)', fontSize: '18px', color: '#666' }}></i>
                                <input 
                                    type="password" 
                                    className="form-control login-input" 
                                    placeholder="Password" 
                                    name="password" 
                                    required 
                                    style={{backgroundColor:'transparent', border:'2px solid black'}}
                                />
                            </div>
                            <div className="mb-3 position-relative">
                                <i className="fa fa-lock position-absolute" style={{ left: '10px', top: '50%', transform: 'translateY(-50%)', fontSize: '18px', color: '#666' }}></i>
                                <input 
                                    type="password" 
                                    className="form-control login-input" 
                                    placeholder="Confirm Password" 
                                    name="password" 
                                    required 
                                    style={{backgroundColor:'transparent', border:'2px solid black'}}
                                />
                            </div>
                            <button type="submit" className="btn btn-dark w-100 mb-2">Sign Up</button>
                            <button type="button" className="btn btn-outline-dark w-100 mb-2"> <img src={assets.google} />Or, sign-Up with Google</button>
                            <p className="mt-2">
                                Allready Have an Account? <a href="#" onClick={()=>setstate('Login')}>Login Here!</a>
                            </p>
                            </form></div>)

            
            
            }
        </div>
       
    );
};

export default Login;
