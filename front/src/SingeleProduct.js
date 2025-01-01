import Header from './Header'; //Include Header
import Footer from './Footer'; //Include Footer
import GOT from './images/gameofthrones.jpg'
import { Link } from 'react-router-dom';
import {useHistory , useParams} from 'react-router-dom'
import React, {useEffect, useState} from "react";
import './DashEcrivain.css'
import './single.css'
function SingleProduct() {
    let {_id} =useParams();
    console.log("id",_id)
    const [data , setData] = useState([]);
  async function getLivre(){
    let result = await fetch(`http://localhost:3000/getProduitParid/${_id}`,{
      method:"GET"
    }); 
    result = await result.json();
    setData(result)
    console.log(data);

   }
   useEffect(() =>{
    getLivre();
} , [])
    return (
        <div className="single-product-container">
            <Header></Header>
            <section >
                <div class="overly"></div> 	
                <div >
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                    <div class="content text-center">
                        <br></br>
                        <h1 className='tiii'>Product Details</h1>
                        <h5 class="whitetext1">Here you can check your Product's Details </h5>
            
                    </div>
                    </div>
                </div>
                </div>
            </section>
            
            <section class="single-product">
            {
                                data.map((item , key) => (
                <div >
                <div class="row">
                    <div class="col-md-4">
                    <div class="single-product-slider">
                        <div class="carousel slide" data-ride="carousel" id="single-product-slider">
                        <div class="carousel-inner">
                        <div class="cardsss" >
                       
                       <div class="card-imggg" >
                        <img src={item.image} alt="apples" className="im"/>
                       </div>
                     
                      
       
       
                   </div>
                            
                        </div>
            
        
                        </div>
                    </div>
                    </div>
                    
                    <div >
                    <div class="single-product-details  mt-lg-0">
                        <h2 className='nEcrii'>{item?.nomProduit}</h2>
                        <div class="sku_wrapper mb-4">
                       <b className='nEcri'> Genre: </b><span ><b>{item.type}</b></span>
                        </div>
            
                        <hr />
                        
                        <h3 class="product-price">{item.prix} DNT</h3>
                        
                       
            
                        <form class="cart" action="#" method="post">
                        <div class="quantity d-flex align-items-center">
                        <br/>  <br/>
                        &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        <Link to={`/checkout/${item._id}`}>
  <button className="btn btn-main btn-small">Buy</button>
</Link>

                        </div>
                        <div class="row">
                    <div class="col-lg-12">
                    <nav class="product-info-tabs wc-tabs mt-5 mb-5">
                        <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Description</a>
        
                          </div>
                    </nav>
            
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <p className='des'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {item.caracteristique}</p>
            
                    
            
                        </div>
                       
                    </div>
                    </div>
                </div>
                        </form>
                    </div>
                    </div>
                </div>
            
                
               
                </div>
                                ))}
            </section>
            
         <Footer></Footer>
        </div>

    )}
export default SingleProduct;