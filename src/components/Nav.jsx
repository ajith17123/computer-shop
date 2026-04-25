import '../assets/style/Nav.css';
import {Link} from "react-router-dom";
import {NavHashLink} from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Nav () {
    return (

     <>

    <nav className='navbar navbar-dark'>
         <div className='container-fluid px-4'>
             <div className='d-flex align-items-center'>
                 <button
                 className='navbar-toggler me-3'
                 type='button'
                 data-bs-toggle='offcanvas'
                 data-bs-target='#sidemenu'>
                <span className='navbar-toggler-icon'></span>
                 </button>
                 <div className='d-none d-lg-block'>
                      <ul className='nav d-flex'>
                             <li className='nav-item'>
                                <Link className='nav-link' to="/product">Computer</Link>
                             </li>
                              <li className='nav-item'>
                                <Link className='nav-link' to="/product">Laptop</Link>
                             </li>
                              <li className='nav-item'>
                                <Link className='nav-link' to="/product">Accessories</Link>
                             </li>
                      </ul>
                 </div>
             </div>
             <Link to="/" className='navbar-brand mx-auto text-decoration-none'>
    <i className="bi bi-pc-display-horizontal tech-center-icon"></i> Smart Vault
</Link>
             <div className='d-flex align-items-center icon-nav'>
                  <Link to="/" className="nav-icon"><i className="bi bi-search"></i></Link>
                  <Link to="/login" className="nav-icon"><i className="bi bi-person"></i></Link>
                  <Link to="/" className="nav-icon"><i className="bi bi-heart"></i></Link>
                  <Link to="/" className="nav-icon"><i className="bi bi-cart3"></i></Link>
             </div>
         </div>
    </nav>


    <div className='offcanvas offcanvas-start' id='sidemenu'>
           <div className='offcanvas-header border-bottom'>
               <h5 className='nav-title'>Smart Vault</h5>
               <button type='button' className='btn-close' data-bs-dismiss="offcanvas"></button>
           </div>
           <div className='offcanvas-body'>
                <ul className='list-unstyled'>
                    <li className='py-2 login-sec border-bottom'><Link to="/login">Login/Register</Link></li>
                <li>
                    <h6 className='nav-sub-title'>Shop By Category</h6>
                    <ul className='list-unstyled'>
                       <li className='py-2 cate-sec'><Link to="/product">Computer</Link></li>
                       <li className='py-2 cate-sec'><Link to="/product">Laptop</Link></li>
                       <li className='py-2 cate-sec'><Link to="/product">Accessories</Link></li>
                    </ul>
                </li>
                </ul>
           <hr />
           <div className='offcanvas-footer'>
                 <ul>
                    <h6 className='nav-sub-title'>Details</h6>
                    <li className='off-linksf'><Link to="/about">Who We Are</Link></li>
                    <li className='off-linksf'><NavHashLink to="/about#cont">Contact</NavHashLink></li>
                    <li className='off-linksf'><Link to="/login">Membership</Link></li>
                    <li className='off-linksf'><Link to="/product">Products</Link></li>
                    <li className='off-linksf'><Link to="/">Track My Order</Link></li>
                    <li className='off-linksf'><Link to="/">Terms And Conditions</Link></li>
                    <li className='off-linksf'><Link to="/">Privacy Policy</Link></li>
                    <li className='off-linksf'><Link to="/">FAQs</Link></li>
                 </ul>
           </div>
           </div>
    </div>

    </>

    )
}

export default Nav;