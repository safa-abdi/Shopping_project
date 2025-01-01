

import tichert from './images/tishGar.jpg'
import pontalon from './images/pontEn.jpg'
import short from './images/shoort.jpg'
import chemise from './images/chemEn.jpg'
import acc from './images/tichert.jpg'
import pon from './images/pon.jpg'
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
function CategorieEnfant() {
    return (
        <div className="shop-container">
            <Header></Header>
            <div >
         


         <br/><br/> 
                  <div class="container">
                  
                 
         
         
                     <div class="cardss" >
                       
                         <div class="card-imgg" >
                         <Link to={'/tichertB'}>  <img src={tichert} alt="apples" className="im"/></Link>
                         </div>
                         <div class="card-body">
                             
                             
                                
                                 
                                 <div style={{display: 'flex', alignItems: 'center' }}>
                                   <p style={{marginLeft: '90px'}}><b>T-Shirts</b></p>
                                  
                                 </div>
                               
                         </div>
                         {/*<div className="card-footer">
                             <button> Read More</button>
                                         </div>*/}
               
         
                     </div>
         
         
         
                                 
                     <div class="cardss" >
                       
                       <div class="card-imgg" >
                       <Link to={'/pontalonB'}>   <img src={pontalon} alt="apples" className="im"/></Link>
                       </div>
                       <div class="card-bodyy">
                           
                           
                              
                               
                               <div style={{display: 'flex', alignItems: 'center' }}>
                                 <p style={{marginLeft: '90px'}}><b>Pants</b></p>
                                
                               </div>
                             
                       </div>
                       {/*<div className="card-footer">
                           <button> Read More</button>
                                       </div>*/}
             
       
       
                   </div>
                   <div class="cardss" >
                       
                       <div class="card-imgg" >
                       <Link to={'/shortB'}><img src={short} alt="apples" className="im"/></Link>
                       </div>
                       <div class="card-bodyy">
                           
                           
                              
                               
                               <div style={{display: 'flex', alignItems: 'center' }}>
                                 <p style={{marginLeft: '90px'}}><b>Short</b></p>
                                
                               </div>
                             
                       </div>
                       {/*<div className="card-footer">
                           <button> Read More</button>
                                       </div>*/}
              
       
       
                   </div>
                   <div class="cardss" >
                       
                       <div class="card-imgg" >
                       <Link to={'/shirtB'}> <img src={chemise} alt="apples" className="im"/></Link>
                       </div>
                       <div class="card-bodyy">
                           
                           
                              
                               
                               <div style={{display: 'flex', alignItems: 'center' }}>
                                 <p style={{marginLeft: '70px'}}><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shirt</b></p>
                                
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
export default CategorieEnfant;