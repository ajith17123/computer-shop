import '../assets/style/Login.css';
import {Link} from "react-router-dom";
import {NavHashLink} from 'react-router-hash-link';
import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Login() {
    const [view, setView] = useState('login');
    return (

      <section className='auth-card py-5'>
            <div className='container'>
                <h2 className='sec-title'>Welcome To Smart Digital World </h2>
                <div className='row'>
                    <div className='auth-body'>

                  <div className='d-flex mb-4'>
        <button 
            className={`w-50 py-2 btn ${view === 'login' ? 'btn-teal' : 'btn-light'}`} 
            onClick={() => setView('login')}>
            LOGIN
        </button>
        <button 
            className={`w-50 py-2 btn ${view === 'register' ? 'btn-teal' : 'btn-light'}`} 
            onClick={() => setView('register')}>
            REGISTER
        </button>
    </div>
                          
                          {view === 'login' ? (

                          <div className='login-form' data-aos="fade-right">
                              <h5 className='sec-heading mb-4'>Login With Smart Vault</h5>
                              <div className='social-login mb-4'>
                                   <button>
                                    <i class="bi bi-facebook"></i>Facebook
                                   </button>
                                   <button>
                                    <i class="bi bi-google"></i>Google
                                   </button>
                              </div>
                              <div className='divider mb-4'>- OR -</div>
                  <input type="text" className='form-control mb-3' placeholder='Enter Mail-id or Phone Number' />
                  <button className='btn-login'>Proceed</button>
                  <p className='para-login'>New User? <span className='par-log' onClick={() => setView('register')} >Create An Account.</span></p>            
                          </div>

                          ) : (

                     <div className='register-form' data-aos="fade-left">
                          <h5 className='sec-heading mb-4'>Register With Smart Vault</h5>
                          <input type="email" className="form-control mb-3" placeholder="Email ID *" />
                          <input type="password" className="form-control mb-3" placeholder="Choose New Password *" />
                          <input type="password" className="form-control mb-3" placeholder="Confirm Password *" />
                              <div className="gender-selection mb-4">
                                    <label className="me-3"><input type="radio" name="gender" className="me-1" /> Male</label>
                                    <label className="me-3"><input type="radio" name="gender" className="me-1" /> Female</label>
                                    <label><input type="radio" name="gender" className="me-1" /> Other</label>
                                </div>
                              <button className='btn-login'>Register Now</button>
                           <p className='para-login'>Already A customer<span className='par-log' onClick={() => setView('login')} >Login</span></p>      
                     </div>

                          )}

                    </div>
                </div>
            </div>
      </section>

    )
}

export default Login;
