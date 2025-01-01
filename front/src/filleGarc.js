

import Garc from './images/garc.jpg'
import fille from './images/fille.jpg'
import caskettte from './images/casquette.jpg'
import chemise from './images/chemise.jpg'
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
function FilleEnf() {
    return (
        <div className="shop-container">
            <Header></Header>
            <div >
         


         <br/><br/> 
                  <div class="container">
                  
                 
         
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                     <div class="cardss" >
                     
                         <div class="card-imgg" >
                         <Link to={'/SounCategorieBoy'}>  <img src={Garc} alt="apples" className="im"/></Link>
                         </div>
                         <div class="card-body">
                             
                             
                                
                                 
                                 <div style={{display: 'flex', alignItems: 'center' }}>
                                   <p style={{marginLeft: '90px'}}><b>Boy</b></p>
                                  
                                 </div>
                               
                         </div>
                         {/*<div className="card-footer">
                             <button> Read More</button>
                                         </div>*/}
                
         
         
                     </div>
         
         
                     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                 
                     <div class="cardss" >
                       
                       <div class="card-imgg" >
                       <Link to={'/Fille'}>   <img src={fille} alt="apples" className="im"/></Link>
                       </div>
                       <div class="card-bodyy">
                           
                           
                              
                               
                               <div style={{display: 'flex', alignItems: 'center' }}>
                                 <p style={{marginLeft: '90px'}}><b>Girl</b></p>
                                
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
export default FilleEnf;