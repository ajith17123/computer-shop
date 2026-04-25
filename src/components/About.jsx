import '../assets/style/About.css';
import {Link} from "react-router-dom";
import {NavHashLink} from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ab1 from '../assets/images/ab1.jpg';
import ab2 from '../assets/images/ab2.jpg';
import v1 from '../assets/videos/v1.mp4';
import v2 from '../assets/videos/v2.mp4';

function About () {
    return (

   <>
   
   {/* {aboutsection} */}

   <section className='about-sec py-5'>
        <div className='container'>
            <h2 className='sec-title'>Who We Are</h2>
            <div className='row align-items-center'>
                 
                    <div className='col-md-3 col-12'>
                          <img src={ab1} className='img-fluid' alt="about" />
                    </div>

                    <div className='col-md-6 col-12'>
                         <p className='about-para'>
                    At <strong>Smart Vault</strong>, we believe your digital space should tell your story. 
                    From high-performance PC components to bespoke gaming setups, we provide the 
                    precision and power you need. Our mission is to bridge the gap between 
                    cutting-edge technology and human creativity, ensuring every build is a masterpiece.
                </p>
                    </div>

                    <div className='col-md-3 col-12'>
                          <img src={ab2} className='img-fluid' alt="about" />
                    </div>

            </div>
        </div>
   </section>

   {/* {contactsection} */}

   <section className='cont-sec py-5' id='cont'>
        <div className='container'>
             <h2 className='sec-title'>Get in Touch</h2>
             <div className='row g-4'>

                <div className='col-md-4'>
                    <a href="tel:+91-0000000000" className='cont-card'>
                        <div className='contact-card'>
                           <i class="bi bi-telephone-fill"></i>
                           <h4 className='cont-head'>Call Us</h4>
                           <p className='cont-para'>Available 10AM to 8PM </p>
                           <h5 className='cont-link'>+91-0000000000</h5>
                        </div>
                    </a>
                </div>

                <div className='col-md-4'>
                    <a href="mailto:smartvault@gmail.com" className='cont-card'>
                        <div className='contact-card'>
                             <i class="bi bi-envelope"></i>
                             <h4 className='cont-head'>Email Us</h4>
                             <p className='cont-para'>Response within 24 hours</p>
                           <h5 className='cont-link'>smartvault@gmail.com</h5>
                        </div>
                    </a>
                </div>

                <div className='col-md-4'>
                    <a href="https://wa.me/919876543210?text=Hi Smart Vault, I have an inquiry!" className='cont-card'>
                        <div className='contact-card'>
                             <i class="bi bi-whatsapp"></i>
                             <h4 className='cont-head'>WhatsApp</h4>
                             <p className='cont-para'>Chat with our experts</p>
                           <h5 className='cont-link'>Chat Now</h5>
                        </div>
                    </a>
                </div>

             </div>
        </div>
   </section>

   {/* {mapsection} */}
   
       <section className='map-sec py-5'>
           <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                         <div className='map-container'>
                              <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.855097437812!2d80.2424!3d13.0674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzAyLjYiTiA4MMKwMTQnMzIuNiJF!5e0!3m2!1sen!2sin!4v1620000000000" 
                        width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy">
                    </iframe>
                         </div>
                    </div>
                </div>
           </div>
       </section>

       {/* (videosection) */}

       <section className='video-sec'>
           <div className='container'>
               <div className='row'>

                  <div className='col-md-6 col-12'>
                       <div className='video-card'>
                            <video src={v1} controls muted autoplay loop typeof='video/mp4' className='img-fluid vid-ga' ></video>
                       </div>
                  </div>

                  <div className='col-md-6 col-12'>
                       <div className='video-card'>
                            <video src={v2} controls muted autoplay loop typeof='video/mp4' className='img-fluid vid-ga' ></video>
                       </div>
                  </div>

               </div>
           </div>
       </section>

   </>

    )
}

export default About;