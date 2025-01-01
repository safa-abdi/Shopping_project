
//import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";

import Header from './Header'; //Include Header
import Footer from './Footer'; //Include Footer

import { Link } from 'react-router-dom';


function Mystery() {



  const [data , setData] = useState([]);
  useEffect(() =>{
      getlivre();
  } , [])
  async function getlivre(){
   
    let result = await fetch("http://localhost:3001/getByc/Mystery",{
      method:"GET"
    }); 
    result = await result.json();
    setData(result)


   }

   async function searchLivre(key){
    console.warn(key)
    let result = await fetch('http://localhost:3001/searchLivre/'+key);
    result= await result.json();
    console.warn(result)
   setData(result)
   
}
  
      

    return (
        <div className="shop-container">
            <Header></Header>
            <section class="page-header4">
                <div class="overly"></div> 	
                <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                    <div class="content text-center">
                    <h1 class="mb-3 whitetext booo">Mystery Book</h1>
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
                    <div class="col-md-9">
                    <div class="row align-items-center">
                        <div class="col-lg-12 mb-4 mb-lg-0">
                        <div class="section-title">
                            <h2 class="d-block text-left-sm">Mystery</h2>
            
                            
                        </div>
                        </div>
                    </div>

            
                    <div class="row">
                    {
                                data.map((item , key) => (
                        <div class="col-lg-4 col-12 col-md-6 col-sm-6 mb-5" >
                        <div class="product">
                    <div class="product-wrap">
                    <Link to={"/single-product/"+item._id}><img  src={item.avatar} alt="product-img" width="250px" height="340px" /></Link>
                      </div>
            
                  
                    
            
                    <div class="product-info">
                    <h2 class="product-title h5 mb-0"><a href="/product-single">{item.titre}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></h2>
                    <div class="product-info">
                      <span class="price">
                       <b>Auteur:</b> {item.auteur}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
            </div>
                    <span class="price">
                       {item.prix} $&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    </div>
                </div>

                    </div>
            
            ))}
                    <div class="col-md-3">
                
            
            
           
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
export default Mystery;

