


//import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";

import Header from './Header'; //Include Header
import Footer from './Footer'; //Include Footer

import { Link } from 'react-router-dom';

import './designProduit.css'
function Hijab() {



  const [data , setData] = useState([]);
  useEffect(() =>{
      getProduit();
  } , [])
  async function getProduit(){
   
    let result = await fetch("http://localhost:3000/getProduitParType/Hijab",{
      method:"GET"
    }); 
    result = await result.json();
    setData(result)


   }

   async function searchProduit(key){
    console.warn(key)
    let result = await fetch('http://localhost:3000/searchProduit/'+key);
    result= await result.json();
    console.warn(result)
   setData(result)
   
}
  
      

    return (
        <div className="shop-container">
        <Header></Header>
        <div >
     


     <br/><br/> 
              <div class="container">
              
              {
                                     data.map((item , key) => (
     
     
                 <div class="card" key={key}>
                   
                     <div class="card-image" >
                     <Link to={"/single-product/"+item._id}>  <img src={item.image} alt="apples" className="im"/></Link>
                     </div>
                     <div class="card-body">
                         
                         
                            
                             <div style={{display: 'flex', alignItems: 'center' }}>
                               
                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b style={{color: 'red'}}>{item.prix}</b> <b style={{marginRight: '10px',color: 'red'}}> Dt</b>
                             </div>
                             
                             <div style={{display: 'flex', alignItems: 'center' }}>
                               <p style={{marginRight: '10px'}}>Product</p>
                              <p >{item.nomProduit}</p>
                             </div>
                           
                     </div>
                     {/*<div className="card-footer">
                         <button> Read More</button>
                                     </div>*/}
             <div className="card-footer">
             {/*<Link to={`/Details?id=${item._id}`}>*/}
             <Link >
       <button>Buy</button>
     </Link></div>
     
     
                 </div>
     
     
     
                                     ))}
     
     
     
              </div>
     
     
             </div>
             <br/> <br/> <br/> <br/>
        <Footer></Footer>
    </div>
)

}
export default Hijab;

