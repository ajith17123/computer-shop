import '../assets/style/Product.css';
import {Link} from "react-router-dom";
import {NavHashLink} from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pp1 from '../assets/images/product/pp1.jpg';
import pp2 from '../assets/images/product/pp2.jpg';
import pp3 from '../assets/images/product/pp3.jpg';
import pp4 from '../assets/images/product/pp4.jpg';
import pp5 from '../assets/images/product/pp5.jpg';
import pp6 from '../assets/images/product/pp6.jpg';
import pp7 from '../assets/images/product/pp7.jpg';
import pp8 from '../assets/images/product/pp8.jpg';
import pp9 from '../assets/images/product/pp9.jpg';


function Product () {
    return (

<section className='product-sec py-5'>
     <div className='container'>
        <h2 className='sec-title'>Our Special Products For You</h2>
       <div className='row g-4'>

          <div className='col-md-4 col-12'>
             <div className='product-card'>
                 <div className='offer-badge'>33% off</div>
                 <div className='prod-img'>
                     <img src={pp1} className='img-fluid image-product' alt="laptop" />
                 </div>
                 <div className='product-content'>
                     <h4 className='card-title'>AMD Ryzen 7 9800X3D Processor</h4>
                     <div className='price-box'>
                         <span className='old-price'><i class="bi bi-currency-rupee"></i>52000</span>
                         <span className='new-price'><i class="bi bi-currency-rupee"></i>48000</span>
                     </div>
                 <button className='prod-but'>Buy Now</button>    
                 </div>
             </div>
          </div>

          <div className='col-md-4 col-12'>
             <div className='product-card'>
                 <div className='offer-badge'>13% off</div>
                 <div className='prod-img'>
                     <img src={pp2} className='img-fluid image-product' alt="laptop" />
                 </div>
                 <div className='product-content'>
                     <h4 className='card-title'>Adata MAESTRO Plus 42SA CPU Air Cooler</h4>
                     <div className='price-box'>
                         <span className='old-price'><i class="bi bi-currency-rupee"></i>5500</span>
                         <span className='new-price'><i class="bi bi-currency-rupee"></i>3900</span>
                     </div>
                 <button className='prod-but'>Buy Now</button>    
                 </div>
             </div>
          </div>

          <div className='col-md-4 col-12'>
             <div className='product-card'>
                 <div className='offer-badge'>2% off</div>
                 <div className='prod-img'>
                     <img src={pp3} className='img-fluid image-product' alt="laptop" />
                 </div>
                 <div className='product-content'>
                     <h4 className='card-title'>NVIDIA Quadro RTX Pro</h4>
                     <div className='price-box'>
                         <span className='old-price'><i class="bi bi-currency-rupee"></i>199000</span>
                         <span className='new-price'><i class="bi bi-currency-rupee"></i>186900</span>
                     </div>
                 <button className='prod-but'>Buy Now</button>    
                 </div>
             </div>
          </div>

          <div className='col-md-4 col-12'>
             <div className='product-card'>
                 <div className='offer-badge'>21% off</div>
                 <div className='prod-img'>
                     <img src={pp4} className='img-fluid image-product' alt="laptop" />
                 </div>
                 <div className='product-content'>
                     <h4 className='card-title'>Thermaltake View 380XL TG ARGB</h4>
                     <div className='price-box'>
                         <span className='old-price'><i class="bi bi-currency-rupee"></i>16200</span>
                         <span className='new-price'><i class="bi bi-currency-rupee"></i>10900</span>
                     </div>
                 <button className='prod-but'>Buy Now</button>    
                 </div>
             </div>
          </div>

          <div className='col-md-4 col-12'>
             <div className='product-card'>
                 <div className='offer-badge'>4% off</div>
                 <div className='prod-img'>
                     <img src={pp5} className='img-fluid image-product' alt="laptop" />
                 </div>
                 <div className='product-content'>
                     <h4 className='card-title'>Powered By MSI PC 4</h4>
                     <div className='price-box'>
                         <span className='old-price'><i class="bi bi-currency-rupee"></i>296000</span>
                         <span className='new-price'><i class="bi bi-currency-rupee"></i>283000</span>
                     </div>
                 <button className='prod-but'>Buy Now</button>    
                 </div>
             </div>
          </div>

          <div className='col-md-4 col-12'>
             <div className='product-card'>
                 <div className='offer-badge'>23% off</div>
                 <div className='prod-img'>
                     <img src={pp6} className='img-fluid image-product' alt="laptop" />
                 </div>
                 <div className='product-content'>
                     <h4 className='card-title'>NVIDIA DGX Spark Grace Blackwell</h4>
                     <div className='price-box'>
                         <span className='old-price'><i class="bi bi-currency-rupee"></i>490000</span>
                         <span className='new-price'><i class="bi bi-currency-rupee"></i>461000</span>
                     </div>
                 <button className='prod-but'>Buy Now</button>    
                 </div>
             </div>
          </div>

          <div className='col-md-4 col-12'>
             <div className='product-card'>
                 <div className='offer-badge'>11% off</div>
                 <div className='prod-img'>
                     <img src={pp7} className='img-fluid image-product' alt="laptop" />
                 </div>
                 <div className='product-content'>
                     <h4 className='card-title'>Ausu NUC 13 Pro RNUC13</h4>
                     <div className='price-box'>
                         <span className='old-price'><i class="bi bi-currency-rupee"></i>49000</span>
                         <span className='new-price'><i class="bi bi-currency-rupee"></i>38500</span>
                     </div>
                 <button className='prod-but'>Buy Now</button>    
                 </div>
             </div>
          </div>

          <div className='col-md-4 col-12'>
             <div className='product-card'>
                 <div className='offer-badge'>15% off</div>
                 <div className='prod-img'>
                     <img src={pp8} className='img-fluid image-product' alt="laptop" />
                 </div>
                 <div className='product-content'>
                     <h4 className='card-title'>Intel NUC 11 Extreme Barebone Mini</h4>
                     <div className='price-box'>
                         <span className='old-price'><i class="bi bi-currency-rupee"></i>89500</span>
                         <span className='new-price'><i class="bi bi-currency-rupee"></i>83500</span>
                     </div>
                 <button className='prod-but'>Buy Now</button>    
                 </div>
             </div>
          </div>

          <div className='col-md-4 col-12'>
             <div className='product-card'>
                 <div className='offer-badge'>17% off</div>
                 <div className='prod-img'>
                     <img src={pp9} className='img-fluid image-product' alt="laptop" />
                 </div>
                 <div className='product-content'>
                     <h4 className='card-title'>Premium PC</h4>
                     <div className='price-box'>
                         <span className='old-price'><i class="bi bi-currency-rupee"></i>333000</span>
                         <span className='new-price'><i class="bi bi-currency-rupee"></i>322900</span>
                     </div>
                 <button className='prod-but'>Buy Now</button>    
                 </div>
             </div>
          </div>

        </div> 
     </div>
</section>

    )
}

export default Product;