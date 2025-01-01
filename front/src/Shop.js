import Header from './Header'; //Include Header
import Footer from './Footer'; //Include Footer
function Shop() {
    
    return (
        <div className="shop-container">
            <Header></Header>
            <section class="page-header4">
                <div class="overly"></div> 	
                <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                    <div class="content text-center">
                    <h1 class="mb-3 whitetext">Shop</h1>
                        <h5 class="whitetext1">Welcome to your friendly library. We have more than 5000 free books waiting to be discovered. </h5>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb bg-transparent justify-content-center">
                       
                        </ol>
                    </nav>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            
            <section class="products-shop section">
                <div class="container">
                <div class="row">
                    <div class="col-md-10">
                    <div class="row align-items-center">
                        <div class="col-lg-12 mb-4 mb-lg-0">
                        <div class="section-title">
                            <h2 class="d-block text-left-sm">Shop</h2>
            
                            
                        </div>
                        </div>
                    </div>

            
                    <div class="row">
                        <div class="col-lg-4 col-12 col-md-6 col-sm-6 mb-5" >
                        <div class="product">
                    <div class="product-wrap">
                    <a ><img class="img-fluid w-100 mb-3 img-first" src="assets/images/Gilbert-Alter-Gilbert-Pipe-Dreams_700x.png" alt="product-img" /></a>
                    <a ><img class="img-fluid w-100 mb-3 img-second" src="assets/images/Gilbert-Alter-Gilbert-Pipe-Dreams2_700x.png" alt="product-img" /></a>
                    </div>
            
                  
                    
            
                    <div class="product-info">
                    <h2 class="product-title h5 mb-0"><a href="/product-single">Pipe-Dreams</a></h2>
                    <span class="price">
                        $39.50
                    </span>
                    </div>
                </div>

                    </div>
            
                    <div class="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
                    <div class="product">
                    <div class="product-wrap">
                    <a ><img class="img-fluid w-100 mb-3 img-first" src="assets/images/detective1.webp" alt="product-img" /></a>
                    <a ><img class="img-fluid w-100 mb-3 img-second" src="assets/images/detective2.webp" alt="product-img" /></a>
                    </div>
            
                  
                        
                    <div class="product-info">
                    <h2 class="product-title h5 mb-0"><a href="/product-single">Bungleton-Green-and-The-Mystic-Commandos</a></h2>
                    <span class="price">
                        $8.50
                    </span>
                    </div>
                </div>
                    </div>
            
                    <div class="col-lg-4 col-12 col-md-6 col-sm-6 mb-5" >
                    <div class="product">
                    <div class="product-wrap">
                    <a ><img class="img-fluid w-100 mb-3 img-first" src="assets/images/Witches-Daisuke-Igarashi_700x.webp" alt="product-img" /></a>
                    <a ><img class="img-fluid w-100 mb-3 img-second" src="assets/images/Witches-Daisuke-Igarashi2_700x.webp" alt="product-img" /></a>
                    </div>
            
                     {/*<span class="onsale">Sale</span>*/ } 
                     
                   
            
                    <div class="product-info">
                    <h2 class="product-title h5 mb-0"><a href="/product-single">Witches - The Complete Collection</a></h2>
                    <span class="price">
                        $69
                    </span>
                    </div>
                </div>
                    </div>
            
                    <div class="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
                <div class="product">
                    <div class="product-wrap">
                    <a ><img class="img-fluid w-100 mb-3 img-first" src="assets/images/Surrealism-and-Magic-Enchanted-Modernity_700x.webp" alt="product-img" /></a>
                    <a ><img class="img-fluid w-100 mb-3 img-second" src="assets/images/Surrealism-and-Magic-Enchanted-Modernity4_700x.webp" alt="product-img" /></a>
                    </div>
            
                  
            
                    <div class="product-info">
                    <h2 class="product-title h5 mb-0"><a href="/product-single">Surrealism-and-Magic</a></h2>
                    <span class="price">
                        $55
                    </span>
                    </div>
                </div>
                    </div>
            
                    <div class="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
                    <div class="product">
                    <div class="product-wrap">
                    <a ><img class="img-fluid w-100 mb-3 img-first" src="assets/images/Zabelle-Panosian-Servant-book_700x.webp" alt="product-img" /></a>
                    <a ><img class="img-fluid w-100 mb-3 img-second" src="assets/images/Zabelle-Panosian-Servant-book4_700x.webp" alt="product-img" /></a>
                    </div>
            
                    
            
                    <div class="product-info">
                    <h2 class="product-title h5 mb-0"><a href="/product-single">Zabelle Panosian - I Am a Servant of Your Voice</a></h2>
                    <span class="price">
                        $59.10
                    </span>
                    </div>
                </div>
                    </div>
            
                    <div class="col-lg-4 col-12 col-md-6 col-sm-6 mb-5" >
                    <div class="product">
                    <div class="product-wrap">
                    <a ><img class="img-fluid w-100 mb-3 img-first" src="assets/images/The-Island-Ana-Maria-Matute_700x.webp" alt="product-img" /></a>
                    <a><img class="img-fluid w-100 mb-3 img-second" src="assets/images/The-Island-Ana-Maria-Matute2_700x.webp" alt="product-img" /></a>
                    </div>
            
                   
            
                    <div class="product-info">
                    <h2 class="product-title h5 mb-0"><a href="/product-single">The-Island</a></h2>
                    <span class="price">
                        $40.00
                    </span>
                    </div>
                </div>
                    </div>
            
                
                
            
                        <div class="col-12">
                        <nav aria-label="Page navigation">
                            <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                            </ul>
                        </nav>
                        </div>
                    </div>				
                    </div>
                    <div class="col-md-3">
                
            
            
           
            
            
         
        
                    </div>
                </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}
export default Shop;