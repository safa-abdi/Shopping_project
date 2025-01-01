
//import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";

import Header from './Header'; //Include Header
import Footer from './Footer'; //Include Footer
import { Link } from 'react-router-dom';
import './in.css'
import "./Login.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
function Product() {



  const [data , setData] = useState([]);
  useEffect(() =>{
      getlivre();
  } , [])
  async function getlivre(){
   
    let result = await fetch("http://localhost:3000/api/SelectProduit",{
      method:"GET"
    }); 
    result = await result.json();
    setData(result)


   }
   const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage] = useState(8); // Nombre d'éléments par pag
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

   // Changer de page
   const nextPage = () => {
       if (currentPage < Math.ceil(data.length / itemsPerPage)) {
           setCurrentPage(currentPage + 1);
       }
   };

   const prevPage = () => {
       if (currentPage > 1) {
           setCurrentPage(currentPage - 1);
       }
   };
   const [openModal, setOpenModal] = useState(false);

      

    return (
        <div className="shop-container">
            <Header></Header>
            <div >
         


         <br/><br/> 
                  <div class="container">
                  
                  {
                                         currentItems.map((item , key) => (
         
         
                     <div class="cards" key={key}>
                       
                         <div class="card-img" >
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
                  <div style={{ display: 'flex', gap: '20px' ,marginLeft:800}}> {/* Adjust the gap as needed */}
            <button 
                onClick={prevPage} 
                disabled={currentPage === 1}
            >
                <FontAwesomeIcon icon={faChevronLeft} style={{ marginRight: '5px' }} /> {/* Icon for "Précédent" */}
                
            </button>
            <button 
                onClick={nextPage} 
                disabled={currentPage >= Math.ceil(data.length / itemsPerPage)}
            >
                
                <FontAwesomeIcon icon={faChevronRight} style={{ marginLeft: '5px' }} /> {/* Icon for "Suivant" */}
            </button>
        </div>
         
                 </div>
                 <br/> <br/> <br/> <br/>
            <Footer></Footer>
        </div>
    )
}
export default Product;

