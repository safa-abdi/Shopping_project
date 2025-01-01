import Header from './Header'; //Include Header
import Footer from './Footer'; //Include Footer
import React, { useEffect, useState } from "react";
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from 'bootstrap';
function SignUpClient() {
    
    const[nom , setNom]=useState("")
    const[prenom , setPrenom]=useState("")
    const[Num_tel , setNum_tel]=useState("")
    const[password , setPassword]=useState("")
    
    
    const[email, setEmail]=useState("")
    const navigate = useNavigate();
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
   
    const[error , setError]=useState(false);
      async function Add1(){
        if( !nom || !prenom  || !Num_tel ||!password|| !password.length<6 ||!email ||  !regEx.test(email) || Num_tel<0 || Num_tel.length!=8  ){
            setError(true);
           return false;
              
          }
          let item = {nom , email ,prenom, Num_tel, password }
         
          let result = await fetch("http://localhost:3001/regclient" , {
              method: 'POST',
              body:JSON.stringify(item),
              headers:{
                  "Content-Type" : 'application/json',
                  "Accept" : 'application/json'
              }
          })
         
          result =await result.json();
          
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
                    <h1 class="mb-3 whitetext">Sig up</h1>
                    <h5 class="whitetext">To Buy your books fill up the form below</h5>
        
               
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
                                <div class="col-lg-6">
                                    <div class="form-group mb-4">
                                        <label >First Name</label>
                                        
                                        <input type="text" class="form-control" id="first_name" placeholder=" first name" onChange={(e)=>setNom(e.target.value)}/>
                                        {error && !nom &&<span className='eroor'  > &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<b>champ obligatoire*</b></span>}
                
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group mb-4">
                                        <label >Last Name</label>
                                        <input type="text" class="form-control" id="last_name" placeholder="last name" onChange={(e)=>setPrenom(e.target.value)} />
                                        {error && !prenom &&<span className='eroor'  > &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<b>champ obligatoire*</b></span>}
                
                                    </div>
                                </div>
                               
                               
        
                                
        
                               
                               
                                <div class="col-lg-12">
                                    <div class="form-group mb-4">
                                        <label >Phone </label>
                                        
                                        <input type="text" class="form-control" id="phone" placeholder="phone number" onChange={(e)=>setNum_tel(e.target.value)}/>
                                        {error && Num_tel.length !=8 &&<span className='eroor'  > &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<b>Numéro du téléphone doit contenir 8 chiffres*</b></span>}
                                        {error && Num_tel<0 &&<span className='eroor'  > &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<b>Numéro du téléphone doit étre posistive </b></span>}
                
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group mb-4">
                                        <label >Email address </label>
                                        <input type="email" class="form-control" id="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
                                        {error && !email &&<span className='eroor'  > &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<b>champ obligatoire*</b></span>}
                                        {error && !regEx.test(email) &&<span className='eroor'  > &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<b>email invalide</b></span>}
                
                                    </div>
                                </div>
        
                               
                                <div class="col-lg-12">
                                    <div class="form-group mb-4">
                                        <label >password</label>
                                        
                                    <input type="password" class="form-control"  placeholder="author" onChange={(e)=>setPassword(e.target.value)}/>
                                    {error && !password &&<span className='eroor'  > &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<b>champ obligatoire*</b></span>}
                                    {error && password.length<6 && <span className='eroor'  ><b>Mot de passe doit contenir minimum 6 caractére</b></span>}        
                         
                                    </div> 
                                    <button  className='btn11' onClick={() =>Add1()}>Sign Up</button>

                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
        

                  






                    
                </div>
                </div>
            </div>
        </div>
        
        
       
            
            <Footer></Footer>
        </div>
    )
}
export default SignUpClient;