import './Home.css'

import homme from './images/hh.jpg'
import femme from './images/f.jpg'
import detective from './images/genre-3.webp'
import biographies from './images/genre-4.png'

import en from './images/en.jpg'

import robe1 from './images/robe1.jpg' ; 
import image2 from './images/robe.jpg' ; 


import chasse1 from './images/jj.jpg'
import image3 from './images/blouse.jpg';



import image4 from './images/blouseFille.jpg'


import image5 from './images/hij.jpg'
import image6 from './images/tich.jpg'


import image7 from './images/222.jpg'
import image8 from './images/bb.jpg'

import wild1 from './images/Wild-Souls-Symbolism-Baltic-States_700x.webp'
import wild2 from './images/Wild-Souls-Symbolism-Baltic-States110_700x.webp'

import journey1 from './images/Shuna-Miyaki-5_700x.webp'; 

import journey2 from './images/Shuna-Miyaki-5_700x2.webp';  
import Header from './Header'; //Include Header
import Footer from './Footer'; //Include Footer


import comic2  from './images/Art-Out-of-Time-book5_700x.webp';

import comic1  from './images/Art-Out-of-Time-Dan-Nadel_700x.webp';

function Home() {
   
    return (
        <div >
             <Header></Header>
            <div  className="home-container">
                    <div   >
                        <div >
                        <div class="row">
                            
                            <div class="col-lg-4 col-12 offset-lg-4 offset-md-6">
                                
                            <div class="slider-caption"> 
                         <br/><br/><br/><br/>

                            <div class="row justify-content-center">
                            <div className='header-content flex flex-c text-center text-white'>
                                <br/><br/><br/><br/>
                <h1 className='header-title text-capitalize' style={{color:"#E7CCCC"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Find&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; your Products</h1><br /><br/>
                <br/><br/><br/><br/>
             </div>

<br/><br/>
   <a href="/genres" class="btn btn-main"><i class="ti-bag mr-2"></i>Shop Now</a> 

                            </div>
                               </div>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
           
            <section class="section products-list">
            <div class="container">
                <div class="row">
                <div class="col-lg-4 col-sm-12 col-md-12">
                    <img src={chasse1} alt="Product big thumb"  class="img-fluid w-100" />
                </div>

                <div class="col-lg-4 col-sm-3 col-md-6">
                    <div class="widget-featured-entries mt-5 mt-lg-0">
                    <h4 class="mb-4 pb-3">New Releases <strong>2024</strong></h4>

                            <div class="media mb-3">
                                <a class="featured-entry-thumb" href="/product-single">
                                <img src={robe1} alt="Product thumb" width="64" class="img-fluid mr-3" />
                            </a>
                            <div class="media-body">
                                <h6 class="featured-entry-title mb-0"><a href="#">Evening dress</a></h6>
                                <p class="featured-entry-meta">$52.99</p>
                            </div>
                            </div>

                            <div class="media mb-3">
                                <a class="featured-entry-thumb" href="#">
                                <img src={image2} alt="Product thumb" width="64" class="img-fluid mr-3" />
                            </a>
                            <div class="media-body">
                                <h6 class="featured-entry-title mb-0"><a href="#">Half american</a></h6>
                                <p class="featured-entry-meta">$27.99</p>
                            </div>
                            </div>

                            <div class="media mb-3">
                            <a class="featured-entry-thumb" href="#">
                                <img src={image3} alt="Product thumb" width="64" class="img-fluid mr-3" />
                            </a>
                            <div class="media-body">
                                <h6 class="featured-entry-title mb-0"><a href="#">Trendy Simply bell sleeve blouse</a></h6>
                                <p>$38.00</p>
                            </div>
                            </div>

                            <div class="media mb-3">
                                <a class="featured-entry-thumb" href="#">
                                <img src={image4} alt="Product thumb" width="64" class="img-fluid mr-3" />
                            </a>
                            <div class="media-body">
                                <h6 class="featured-entry-title mb-0"><a href="#">Sleeve blouse</a></h6>
                                <p class="featured-entry-meta">$45.00</p>
                            </div>
                            </div>

                
                    </div>
                </div>


                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="widget-featured-entries mt-5 mt-lg-0">
                    <h4 class="mb-4 pb-3"><br></br></h4>

                            <div class="media mb-3">
                                <a class="featured-entry-thumb" href="/product-single">
                                <img src={image5} alt="Product thumb" width="64" class="img-fluid mr-3" />
                            </a>
                            <div class="media-body">
                                <h6 class="featured-entry-title mb-0"><a href="#">Hijab Girl</a></h6>
                                <p class="featured-entry-meta">$12.99</p>
                            </div>
                            </div>

                            <div class="media mb-3">
                                <a class="featured-entry-thumb" href="#">
                                <img src={image6} alt="Product thumb" width="64" class="img-fluid mr-3" />
                            </a>
                            <div class="media-body">
                                <h6 class="featured-entry-title mb-0"><a href="#">Homme T-shirt</a></h6>
                                <p class="featured-entry-meta">$37.65</p>
                            </div>
                            </div>

                            <div class="media mb-3">
                            <a class="featured-entry-thumb" href="#">
                                <img src={image7} alt="Product thumb" width="64" class="img-fluid mr-3" />
                            </a>
                            <div class="media-body">
                                <h6 class="featured-entry-title mb-0"><a href="#">Embroidery tote bag</a></h6>
                                <p>$28.00</p>
                            </div>
                            </div>

                            <div class="media mb-3">
                                <a class="featured-entry-thumb" href="#">
                                <img src={image8} alt="Product thumb" width="64" class="img-fluid mr-3" />
                            </a>
                            <div class="media-body">
                                <h6 class="featured-entry-title mb-0"><a href="#">Blouses | Women's Blouses</a></h6>
                                <p class="featured-entry-meta">$35.00</p>
                            </div>
                            </div>

                           
                    </div>
                </div>
                </div>
            </div>
            </section>
            <Footer></Footer>
        </div>
        
    )
}
export default Home;