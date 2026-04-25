import '../assets/style/Home.css';
import {Link} from "react-router-dom";
import {NavHashLink} from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hero1 from '../assets/images/car1.jpg';
import hero2 from '../assets/images/car2.jpg';
import hero3 from '../assets/images/car3.jpg';
import hero4 from '../assets/images/car4.jpg';
import hero5 from '../assets/images/car5.jpg';
import hero6 from '../assets/images/car6.jpg';
import p1 from '../assets/images/cabinet.jpg';
import p2 from '../assets/images/cooler.jpg';
import p3 from '../assets/images/graphics card.jpg';
import p4 from '../assets/images/motherboard.jpg';
import p5 from '../assets/images/powersupply.jpg';
import p6 from '../assets/images/storage.jpg';
import t1 from '../assets/images/t1.jpg';
import t2 from '../assets/images/t2.jpg';
import t3 from '../assets/images/t3.jpg';
import t4 from '../assets/images/t4.jpg';
import t5 from '../assets/images/t5.jpg';
import t6 from '../assets/images/t6.jpg';


function Home () {
    return (

   <>

   {/* {herosection} */}

   <section className='hero-sec'>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={hero1} className="d-block w-100 hero-img" alt="Slide 1" />
                        </div>
                        <div className="carousel-item">
                            <img src={hero2} className="d-block w-100 hero-img" alt="Slide 2" />
                        </div>
                        <div className="carousel-item">
                            <img src={hero3} className="d-block w-100 hero-img" alt="Slide 3" />
                        </div>
                        <div className="carousel-item">
                            <img src={hero4} className="d-block w-100 hero-img" alt="Slide 4" />
                        </div>
                        <div className="carousel-item">
                            <img src={hero5} className="d-block w-100 hero-img" alt="Slide 5" />
                        </div>
                        <div className="carousel-item">
                            <img src={hero6} className="d-block w-100 hero-img" alt="Slide 6" />
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

  {/* {productsection}           */}

  <section className='prod-sec py-5' >
          <div className='container'>
               <h2 className='sec-title mb-5'>Our Exclusive Collections</h2>
               <div className='row g-4'>
                    
                    <div className='col-lg-2 col-md-4 col-12' data-aos="fade-up">
                            <div className='product-card'>
                                <div className='img-box'>
                                     <img src={p1} className='img-fluid pro-img' alt="accessories" />
                                </div>
                            </div>
                    </div>

                     <div className='col-lg-2 col-md-4 col-12' data-aos="fade-up" data-aos-delay="200">
                            <div className='product-card'>
                                <div className='img-box'>
                                     <img src={p2} className='img-fluid pro-img' alt="accessories" />
                                </div>
                            </div>
                    </div>

                     <div className='col-lg-2 col-md-4 col-12' data-aos="fade-up" data-aos-delay="400">
                            <div className='product-card'>
                                <div className='img-box'>
                                     <img src={p3} className='img-fluid pro-img' alt="accessories" />
                                </div>
                            </div>
                    </div>

                     <div className='col-lg-2 col-md-4 col-12' data-aos="fade-up" data-aos-delay="600">
                            <div className='product-card'>
                                <div className='img-box'>
                                     <img src={p4} className='img-fluid pro-img' alt="accessories" />
                                </div>
                            </div>
                    </div>

                     <div className='col-lg-2 col-md-4 col-12' data-aos="fade-up" data-aos-delay="800">
                            <div className='product-card'>
                                <div className='img-box'>
                                     <img src={p5} className='img-fluid pro-img' alt="accessories" />
                                </div>
                            </div>
                    </div>

                     <div className='col-lg-2 col-md-4 col-12' data-aos="fade-up" data-aos-delay="1000">
                            <div className='product-card'>
                                <div className='img-box'>
                                     <img src={p6} className='img-fluid pro-img' alt="accessories" />
                                </div>
                            </div>
                    </div>

               </div>
          </div>
  </section>

  {/* {gallerysection} */}

  <section className='gal-sec py-5'>
      <div className='container'>
        <h2 className='sec-title mb-5'>Offers-Best Sellers</h2>
          <div className='row gy-4'>
               
              <div className='col-md-6 col-12' data-aos="zoom-in">
                   <div className='img-card'>
                        <div className='img-gal'>
                             <img src={t1} className='img-fluid pro-gal' alt="gallery" />
                        </div>
                   </div>
              </div>

              <div className='col-md-6 col-12' data-aos="zoom-in" data-aos-delay="100">
                   <div className='img-card'>
                        <div className='img-gal'>
                             <img src={t2} className='img-fluid pro-gal' alt="gallery" />
                        </div>
                   </div>
              </div>

              <div className='col-md-6 col-12' data-aos="zoom-in" data-aos-delay="200">
                   <div className='img-card'>
                        <div className='img-gal'>
                             <img src={t3} className='img-fluid pro-gal' alt="gallery" />
                        </div>
                   </div>
              </div>

              <div className='col-md-6 col-12' data-aos="zoom-in" data-aos-delay="300">
                   <div className='img-card'>
                        <div className='img-gal'>
                             <img src={t4} className='img-fluid pro-gal' alt="gallery" />
                        </div>
                   </div>
              </div>

              <div className='col-md-6 col-12' data-aos="zoom-in" data-aos-delay="400">
                   <div className='img-card'>
                        <div className='img-gal'>
                             <img src={t5} className='img-fluid pro-gal' alt="gallery" />
                        </div>
                   </div>
              </div>

              <div className='col-md-6 col-12' data-aos="zoom-in" data-aos-delay="500">
                   <div className='img-card'>
                        <div className='img-gal'>
                             <img src={t6} className='img-fluid pro-gal' alt="gallery" />
                        </div>
                   </div>
              </div>

          </div>
      </div>
  </section>

{/* {aboutsection} */}

<section className='about-sec py-5'>
    <div className='container'>
        <h2 className='sec-title mb-5'>Our Story</h2>
        <div className='row'>
            <div className='col-12'>
                 <div className='about-text text-center' data-aos="fade-right">
                       <p className='about-para'>
                        At Smart Vault, we are more than just a tech store; we are your partners in building the ultimate digital experience. From cutting-edge PC components to premium gaming gear, we source only the finest hardware for enthusiasts and professionals alike. Our mission is to provide reliability, performance, and expert support to help you unlock your true potential in the digital world.
                       </p>
                 </div>
                 <div className="mt-4">
                            <Link to="/about" className="read-more-btn">
                                Read More <i className="bi bi-arrow-right ms-2"></i>
                            </Link>
                </div>
            </div>
        </div>
    </div>
</section>

  {/* {servicesection} */}

  <section className='ser-sec py-5'>
        <div className='container text-center'>
           <div className='row g-4'>

               <div className='col-md-3 col-6' data-aos="flip-left">
                     <div className='service-box'>
                         <i className="bi bi-truck"></i>
                         <h4 className='service-title'>Free Delivery</h4>
                         <p className='service-para'>On all orders over ₹50,000</p>
                     </div>
               </div>

                <div className='col-md-3 col-6' data-aos="flip-left">
                     <div className='service-box'>
                         <i className="bi bi-shield-check"></i>
                         <h4 className='service-title'>Secure Payment</h4>
                         <p className='service-para'>100% safe payment gateway</p>
                     </div>
               </div>

               <div className='col-md-3 col-6' data-aos="flip-left">
                     <div className='service-box'>
                         <i className="bi bi-headset"></i>
                         <h4 className='service-title'>24/7 Support</h4>
                         <p className='service-para'>Dedicated tech support team</p>
                     </div>
               </div>

               <div className='col-md-3 col-6' data-aos="flip-left">
                     <div className='service-box'>
                         <i className="bi bi-arrow-repeat"></i>
                         <h4 className='service-title'>Easy Returns</h4>
                         <p className='service-para'>7-day replacement policy</p>
                     </div>
               </div>

           </div>
        </div>
  </section>

   </>

    )
}

export default Home;