import '../assets/style/Footer.css';
import {Link} from "react-router-dom";
import {NavHashLink} from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Footer () {
    return (

    <footer className='foot-sec py-5'>
          <div className='container'>
                <div className='row g-4'>
                      
                <div className='col-md-3 col-12'>
                     <h4 className='footer-logo'>
                        <i className="bi bi-pc-display-horizontal me-2"></i>SMART VAULT
                     </h4>
                     <p className="footer-desc">
                            Your ultimate destination for high-performance computers, laptops, and premium tech accessories. Building the future, one byte at a time.
                     </p>
                     <div className="social-links d-flex gap-3">
                            <a href="#"><i className="bi bi-facebook"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                            <a href="#"><i className="bi bi-twitter-x"></i></a>
                            <a href="#"><i className="bi bi-youtube"></i></a>
                        </div>
                </div>

                 <div className='col-md-3 col-12'>
                     <h6 className='footer-title'>Quick Links</h6>
                     <ul className='footer-links'>
                          <li><Link to="/">Home</Link></li>
                            <li><Link to="/product">Products</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/login">Membership</Link></li>
                     </ul>
                 </div>

                 <div className='col-md-3 col-12'>
                     <h6 className='footer-title'>Categories</h6>
                     <ul className='footer-links'>
                         <li><Link to="/product">Computers</Link></li>
                            <li><Link to="/product">Laptops</Link></li>
                            <li><Link to="/product">Accessories</Link></li>
                            <li><Link to="/product">Monitors</Link></li>
                     </ul>
                 </div>

                 <div className='col-md-3 col-12'>
                      <h6 className='footer-title'>Contact Us</h6>
                       <ul className='footer-contact'>
                           <li><i className="bi bi-geo-alt-fill me-2"></i>Smart vault,Bangalore</li>
                            <li><i className="bi bi-envelope-fill me-2"></i>smartvault@gmail.com</li>
                            <li><i className="bi bi-telephone-fill me-2"></i>+91-0000000000</li>
                       </ul>

                       <div className='news-letter'>
                            <p className='con-p'>Subscribe For Latest Updates</p>
                            <div className='input-group'>
                                <input type="email" placeholder='Email Id' className='form-control' />
                                <button className='foot-btn'>Join</button>
                            </div>
                       </div>
                 </div>

                </div>

                <hr className='footer-line' />

                <div className='foot-bottom align-items-center'>
                     <p className='foo-p'> &copy; All Rights Reserved. </p>
                </div>
          </div>
    </footer>

    )
}

export default Footer;
