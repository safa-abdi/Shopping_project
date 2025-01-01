import Header from './Header'; //Include Header
import Footer from './Footer'; //Include Footer
import React, { useEffect, useState } from "react";
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { NavLink, useNavigate } from "react-router-dom";
function LoginClient() {
    
   
    const[password , setPassword]=useState("")
    
    
    const[email, setEmail]=useState("")
    const navigate = useNavigate();
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
   
    const[error , setError]=useState(false);
      async function Add(){
        if( !password|| !password.length<6 ||!email ||  !regEx.test(email)   ){
            setError(true);
           return false;
              
          }
          let item = { email , password }
         
          let result = await fetch("http://localhost:3001/users" , {
              method: 'POST',
              body:JSON.stringify(item),
              headers:{
                  "Content-Type" : 'application/json',
                  "Accept" : 'application/json'
              }
          })
         
          result = result.json();
          
          if(result){
            
            navigate('/loginClient')
          }
          else{
              swal({
                  title: "Echec d'ajout' ",
                 
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                });
          
          }
         
        
         
      }
    return (
        <div className="checkout-container">
            <Header></Header>
            <section class="page-header">
            <div class="overly"></div> 	
            <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                <div class="content text-center">
                    <h1 class="mb-3 whitetext">Login</h1>
                    
               
                </div>
                </div>
            </div>
            </div>
        </section>
        <div class="page-wrapper">
            <div class="checkout shopping">
                <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 pr-2">
                        <div class="billing-details mt-5">
                           
                            <form class="checkout-form">
                            <div class="row">
                               
        
                                
        
                               
                               
                               
                                <div class="col-lg-12">
                                    <div class="form-group mb-4">
                                        <label for="first_name">Email address </label>
                                        <input type="email" class="form-control" id="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
                                        {error && !email &&<span className='eroor'  > &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<b>champ obligatoire*</b></span>}
                                        {error && !regEx.test(email) &&<span className='eroor'  > &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<b>email invalide</b></span>}
                
                                    </div>
                                </div>
        
                               
                                <div class="col-lg-12">
                                    <div class="form-group mb-4">
                                        <label for="first_name">password</label>
                                        
                                    <input type="password" class="form-control"  placeholder="author" onChange={(e)=>setPassword(e.target.value)}/>
                                    {error && !password &&<span className='eroor'  > &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<b>champ obligatoire*</b></span>}
                                    {error && password.length<6 && <span className='eroor'  ><b>Mot de passe doit contenir minimum 6 caractére</b></span>}        
                         
                                    </div> 
                                    <a class="boutonss orderbtn btn btn-main btn-small" >Sign Up</a>

                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
        

                  






                    
                </div>
                </div>
            </div>
        </div>
        
        
       
            <div class="modal fade" id="coupon-modal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                <div class="modal-content py-5">
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                            <input class="form-control" type="text" placeholder="Enter Coupon Code" />
                            </div>
                            <button type="button" class="btn btn-main btn-small" data-dismiss="modal">Apply Coupon</button>
                        </form>
                    </div>
                </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default LoginClient;