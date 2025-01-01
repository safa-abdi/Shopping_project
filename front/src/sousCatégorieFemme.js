

import femme from './images/robeC.jpg'
import homme from './images/robeLong.jpg'
import en from './images/blousee.jpg'
import capucheFemme from './images/CaoucheFemme.jpg'

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
function CategorieFemme() {
    return (
        <div className="shop-container">
            <Header></Header>
            <div >
         


         <br/><br/> 
                  <div class="container">
                  
                 
                  
         
                     <div class="cardss" >
                       
                         <div class="card-imgg" >
                         <Link to={'/robeCourte'}>   <img src={femme} alt="apples" className="im"/></Link>
                         </div>
                         <div class="card-body">
                             
                             
                                
                                 
                                 <div style={{display: 'flex', alignItems: 'center' }}>
                                   <p style={{marginLeft: '90px'}}><b>short dress</b></p>
                                  
                                 </div>
                               
                         </div>
                         {/*<div className="card-footer">
                             <button> Read More</button>
                                         </div>*/}
                
         
         
                     </div>
                     
         
         
                                 
                     <div class="cardss" >
                       
                       <div class="card-imgg" >
                       <Link to={'/longDress'}>  <img src={homme} alt="apples" className="im"/></Link>
                       </div>
                       <div class="card-bodyy">
                           
                           
                              
                               
                               <div style={{display: 'flex', alignItems: 'center' }}>
                                 <p style={{marginLeft: '90px'}}><b>Long dress</b></p>
                                
                               </div>
                             
                       </div>
                       {/*<div className="card-footer">
                           <button> Read More</button>
                                       </div>*/}
             
       
       
                   </div>
                   <div class="cardss" >
                       
                       <div class="card-imgg" >
                       <Link to={'/blouse'}> <img src={en} alt="apples" className="im"/></Link> 
                       </div>
                       <div class="card-bodyy">
                           
                       
                              
                               
                               <div style={{display: 'flex', alignItems: 'center' }}>
                                 <p style={{marginLeft: '90px'}}><b>Blouse</b></p>
                                
                               </div>
                             
                       </div>
                       {/*<div className="card-footer">
                           <button> Read More</button>
                                       </div>*/}
             
       
       
                   </div>
                   <div class="cardss" >
                       
                       <div class="card-imgg" >
                       <Link to={'/tichertFemme'}> <img src={acc} alt="apples" className="im"/></Link> 
                       </div>
                       <div class="card-bodyy">
                           
                           
                              
                               
                               <div style={{display: 'flex', alignItems: 'center' }}>
                                 <p style={{marginLeft: '70px'}}><b>T-Shirts</b></p>
                                
                               </div>
                             
                       </div>
                       {/*<div className="card-footer">
                           <button> Read More</button>
                                       </div>*/}
           
       
           
                   </div>
                                 
                   <div class="cardss" >
                       
                       <div class="card-imgg" >
                       <Link to={'/pontalonF'}>  <img src={pon} alt="apples" className="im"/></Link>
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
                       <Link to={'/hijab'}> <img src={hijab} alt="apples" className="im"/></Link>
                       </div>
                       <div class="card-bodyy">
                           
                           
                              
                               
                               <div style={{display: 'flex', alignItems: 'center' }}>
                                 <p style={{marginLeft: '70px'}}><b>Hijab</b></p>
                                
                               </div>
                             
                       </div>
                       {/*<div className="card-footer">
                           <button> Read More</button>
                                       </div>*/}
             
       
       
                   </div>
                   <div class="cardss" >
                       
                       <div class="card-imgg" >
                       <Link to={'/capucheF'}> <img src={capucheFemme} alt="apples" className="im"/></Link>
                       </div>
                       <div class="card-bodyy">
                           
                           
                              
                               
                               <div style={{display: 'flex', alignItems: 'center' }}>
                                 <p style={{marginLeft: '70px'}}><b>Capuche</b></p>
                                
                               </div>
                             
                       </div>
                    
                   </div>
                  </div>
         
         
                 </div>
                 
                 <br/> <br/> <br/> <br/>
            <Footer></Footer>
        </div>
    )

}
export default CategorieFemme;