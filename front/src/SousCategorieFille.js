

import tichert from './images/tishertF.jpg'
import pontalon from './images/pontF.jpg'
import robe from './images/robefille.jpg'
import chemise from './images/blouseFille.jpg'
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
function CategorieFille() {
    return (
        <div className="shop-container">
            <Header></Header>
            <div >
         


         <br/><br/> 
                  <div class="container">
                  
                 
         
         
                     <div class="cardss" >
                       
                         <div class="card-imgg" >
                        <Link to={'/tichertF'}>  <img src={tichert} alt="apples" className="im"/></Link>
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
                       <Link to={'/pontalonF'}>  <img src={pontalon} alt="apples" className="im"/></Link>
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
                       <Link to={'/robe'}> <img src={robe
                        } alt="apples" className="im"/></Link>
                       </div>
                       <div class="card-bodyy">
                           
                           
                              
                               
                               <div style={{display: 'flex', alignItems: 'center' }}>
                                 <p style={{marginLeft: '90px'}}><b>Dress</b></p>
                                
                               </div>
                             
                       </div>
                       {/*<div className="card-footer">
                           <button> Read More</button>
                                       </div>*/}
              
       
       
                   </div>
                   <div class="cardss" >
                       
                       <div class="card-imgg" >
                       <Link to={'/blouseF'}>   <img src={chemise} alt="apples" className="im"/></Link>
                       </div>
                       <div class="card-bodyy">
                       
                               
                               <div style={{display: 'flex', alignItems: 'center' }}>
                                 <p style={{marginLeft: '70px'}}><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blouse</b></p>
                                
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
export default CategorieFille;