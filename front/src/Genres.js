

import femme from './images/f.jpg'
import homme from './images/hom.jpg'
import en from './images/en.jpg'
import sac from './images/222.jpg'
import acc from './images/cupp.jpg'
import cache from './images/genre-9 (1).png'
import historical from './images/genre-8.png'
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
function Genres() {
    return (
        <div className="shop-container">
            <Header></Header>
            <div >
         


         <br/><br/> 
                  <div class="container">
                  
                 
         
         
                     <div class="cardss" >
                       
                         <div class="card-imgg" >
                         <Link to={'/caegorieFemme'}><img src={femme} alt="apples" className="im"/></Link> 
                         </div>
                         <div class="card-body">
                             
                             
                                
                                 
                                 <div style={{display: 'flex', alignItems: 'center' }}>
                                   <p style={{marginLeft: '90px'}}><b>Women</b></p>
                                  
                                 </div>
                               
                         </div>
                         {/*<div className="card-footer">
                             <button> Read More</button>
                                         </div>*/}
               
         
                     </div>
         
         
                     
                                 
                     <div class="cardss" >
                       
                       <div class="card-imgg" >
                       <Link to={'/CategorieHomme'}>  <img src={homme} alt="apples" className="im"/></Link>
                       </div>
                       <div class="card-bodyy">
                           
                           
                              
                               
                               <div style={{display: 'flex', alignItems: 'center' }}>
                                 <p style={{marginLeft: '90px'}}><b>Men</b></p>
                                
                               </div>
                             
                       </div>
                       {/*<div className="card-footer">
                           <button> Read More</button>
                                       </div>*/}
              
       
       
                   </div>
                   <div class="cardss" >
                       
                       <div class="card-imgg" >
                       <Link to={'/categorieenfant'}>  <img src={en} alt="apples" className="im"/></Link>
                       </div>
                       <div class="card-bodyy">
                           
                           
                              
                               
                               <div style={{display: 'flex', alignItems: 'center' }}>
                                 <p style={{marginLeft: '90px'}}><b>Child</b></p>
                                
                               </div>
                             
                       </div>
                       {/*<div className="card-footer">
                           <button> Read More</button>
                                       </div>*/}
             
       
       
                   </div>
                   <div class="cardss" >
                       
                       <div class="card-imgg" >
                       <Link to={'/accessoire'}>   <img src={acc} alt="apples" className="im"/></Link>
                       </div>
                       <div class="card-bodyy">
                           
                           
                              
                               
                               <div style={{display: 'flex', alignItems: 'center' }}>
                                 <p style={{marginLeft: '70px'}}><b>Accessories</b></p>
                                
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
export default Genres;