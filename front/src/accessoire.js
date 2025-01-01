

import sac from './images/222.jpg'
import broose from './images//brosse.jpg'
import cup from './images/cupp.jpg'
import water from './images/water.jpg'

import cacheT from './images/cache.jpg'
import cartable from './images/cartable.jpg'
import hijab from './images/hij.jpg'
import LITERARYFICTION from './images/genre-10.png'
import nonfiction from './images/genre-11.png'
import SCIENCEFICTION from './images/genre-12.webp'
import biographies from './images/genre-4.png'
import  YoungAdult from './images/genre-6.png'
import Fantasy from './images/genre-2.png'
import "./Login.css"
import Header from './Header'; //Include Header
import Footer from './Footer'; //Include Footer
import { Link } from 'react-router-dom';
import './inn.css'
function Accessoire() {
    return (
        <div className="shop-container">
            <Header></Header>
            <div >
         


         <br/><br/> 
                  <div class="container">
                  
                 
         
         
                     <div class="cardss" >
                       
                         <div class="card-imgg" >
                         <Link to={'/handBag'}>   <img src={sac} alt="apples" className="im"/></Link>
                         </div>
                         <div class="card-body">
                             
                             
                                
                                 
                                 <div style={{display: 'flex', alignItems: 'center' }}>
                                   <p style={{marginLeft: '90px'}}><b>Handbag</b></p>
                                  
                                 </div>
                               
                         </div>
                         {/*<div className="card-footer">
                             <button> Read More</button>
                                         </div>*/}
                
         
         
                     </div>
         
         
         
                                 
                     <div class="cardss" >
                       
                       <div class="card-imgg" >
                       <Link to={'/comb'}> <img src={broose} alt="apples" className="im"/></Link>
                       </div>
                       <div class="card-bodyy">
                           
                           
                              
                               
                               <div style={{display: 'flex', alignItems: 'center' }}>
                                 <p style={{marginLeft: '90px'}}><b>Comb</b></p>
                                
                               </div>
                             
                       </div>
                       {/*<div className="card-footer">
                           <button> Read More</button>
                                       </div>*/}
             
       
       
                   </div>
                   <div class="cardss" >
                       
                       <div class="card-imgg" >
                       <Link to={'/cup'}><img src={cup} alt="apples" className="im"/></Link>  
                       </div>
                       <div class="card-bodyy">
                           
                           
                              
                               
                               <div style={{display: 'flex', alignItems: 'center' }}>
                                 <p style={{marginLeft: '90px'}}><b>Cup</b></p>
                                
                               </div>
                             
                       </div>
                       {/*<div className="card-footer">
                           <button> Read More</button>
                                       </div>*/}
             
       
       
                   </div>
                   <div class="cardss" >
                       
                       <div class="card-imgg" >
                       <Link to={'/water'}>  <img src={water} alt="apples" className="im"/></Link>
                       </div>
                       <div class="card-bodyy">
                           
                           
                              
                               
                               <div style={{display: 'flex', alignItems: 'center' }}>
                                 <p style={{marginLeft: '70px'}}><b>Water bottle</b></p>
                                
                               </div>
                             
                       </div>
                       {/*<div className="card-footer">
                           <button> Read More</button>
                                       </div>*/}
           
       
       
                   </div>
                                 
                   <div class="cardss" >
                       
                       <div class="card-imgg" >
                       <Link to={'/satchel'}>  <img src={cartable} alt="apples" className="im"/></Link>
                       </div>
                       <div class="card-bodyy">
                           
                           
                              
                               
                               <div style={{display: 'flex', alignItems: 'center' }}>
                                 <p style={{marginLeft: '90px'}}><b>Satchel</b></p>
                                
                               </div>
                             
                       </div>
                       {/*<div className="card-footer">
                           <button> Read More</button>
                                       </div>*/}
        
       
       
                   </div>
                   <div class="cardss" >
                       
                       <div class="card-imgg" >
                       <Link to={'/coverPhone'}> <img src={cacheT} alt="apples" className="im"/></Link>
                       
                       </div>
                       <div class="card-bodyy">
                           
                           
                              
                               
                               <div style={{display: 'flex', alignItems: 'center' }}>
                                 <p style={{marginLeft: '70px'}}><b>Phone cover</b></p>
                                
                               </div>
                             
                       </div>
                       {/*<div className="card-footer">
                           <button> Read More</button>
                                       </div>*/}
             
       
       
                   </div>
                   
                  </div>
         
         
                 </div>
                 
                 <br/> <br/> <br/> <br/>
            <Footer></Footer>
        </div>
    )

}
export default Accessoire;