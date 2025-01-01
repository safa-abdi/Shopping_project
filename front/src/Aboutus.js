import Header from './Header'; //Include Header
import Footer from './Footer'; //Include Footer
import AS from './images/logo.png'
import "./Home.css"
function Aboutus() {
    return (
        <div className="single-product-container">
           <Header></Header>

          <br></br> 
            <br></br> 

            

           <div class="row justify-content-center">
                        <div class="col-lg-9">
                            <div class=" text-center">

                                
                                <h2 className='booo'>“Thanks to Graffiti, there is no reason to buy Product on Amazon anymore.”</h2>
                                <br/>
                            </div>
                        </div>
                    </div>


            <section class="single-product">
                <div class="container">
                <div class="row">
                    <div class="col-md-4">
                    <div class="single-product-slider">
                        <div class="carousel slide" data-ride="carousel" id="single-product-slider">
                        <div class="carousel-inner">
                            <div >
                            <img src={AS} alt="" class="img-fluid imgtaille" style={{width:'500px' , height:'300px'}} />
                            </div>
                            
                        </div>
            
        
                        </div>
                    </div>
                    </div>
                    
                    <div class="col-md-6">
                    
            

                    <div class="single-product-details mt-5 mt-lg-0">
                                                  <h2 class=" row justify-content-center About">About us </h2>
                       
                        
                                                    
                       &nbsp;&nbsp;&nbsp;&nbsp;  <p class="gt">Welcome to our online store of personalized products! Discover a world of unique and customizable items that cater to your individuality and style. From custom engraved jewelry that tells your story,, we offer a diverse range of products that can be tailored to your preferences. Our easy-to-use design tools allow you to add your personal touch, whether it's a name, special date, or a heartfelt message. Each item is crafted with care, reflecting our commitment to delivering not just products, but memories. Explore our collection and embark on a journey of creating one-of-a-kind treasures that celebrate who you are or make unforgettable gifts for your loved ones. Shop with us and let your imagination run wild!  </p>
            
                        
                    </div>
                    </div>
                </div>
            
                
              
                </div>
            </section>
            
         


            <section class="ab">
    <br></br>
    <br></br>
            
                <div class="container">
                <div >
                    <div >
                    <div class="content text-center">
                   
                        

  
    
             
                    </div>
                    </div>
                </div>
                </div>
            </section> 





            <section class="single-product">
                <div class="container ">
                <div >
                    
                    
                    <div >
                    

                    <div>
                                           
                       
                        
                        
            
                        
                    </div>
                    </div>


                </div>
            
                
              
                </div>
            </section>





















<Footer></Footer>
        </div>





    )}
export default Aboutus;