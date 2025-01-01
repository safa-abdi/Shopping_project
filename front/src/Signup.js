import './Login.css';
import Header from './Header'; //Include Header
import Footer from './Footer'; //Include Footer
import swal from 'sweetalert';


import { useNavigate } from "react-router-dom";
import React, {useEffect, useState} from "react";
import { Button } from 'bootstrap';
function SignUp() {
    // const router = useRouter()
    const[nom , setNom]=useState("")
    const[email , setEmail]=useState("")
    const[motDePasse , setPassword]=useState("")
    const[prenom , setPrenom]=useState("")
    const[tel, setNum_tel]=useState("")
    const navigate = useNavigate();
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    const[error , setError]=useState(false);
      async function Add(){
  
        if( !email || !motDePasse   || motDePasse.length<6  || tel<8 || !nom || !prenom || !regEx.test(email) ||tel<0){
            setError(true);
           return false;
              
          }
          let item = {nom , email ,prenom , tel, motDePasse ,role:'Imprimeur'}
        
          let result = await fetch("http://localhost:3000/api/ajoutuser" , {
              method: 'POST',
              body:JSON.stringify(item),
              headers:{
                  "Content-Type" : 'application/json',
                  "Accept" : 'application/json'
              }
          })
         
          result = result.json();
          navigate('/Login')
          if(result){
            
            
          }
          else{
              swal({
                  title: "Echec d'ajout' ",
                 
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                });
          
          }
         
          //router.push('/');
         
      }
    return (
        <div className="signUp-container">
            <Header></Header>
             <div  >
            <div class="account section" >
                <div >
                <div class="d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-5 rounded border">
                            <div class="login-form p-5">
                        <div class="text-center heading">
                        <h2 >Sign Up</h2>
                        <p class="lead">Already have an account? <a href="/login"> Login now</a></p>
                        </div>
            
                        <form action="#" className='f11' onSubmit={() =>Add()}>
                        <div class="form-group mb-4">
                            
                            <input type="text" class="form-control rounded border border-dark" placeholder="Enter First name" onChange={(e)=>setNom(e.target.value)}/>
                            {error && !nom &&<span className='eroor'  > &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<b>champ obligatoire*</b></span>}
                
                        </div>
                        <div class="form-group mb-4">
                           
                            
                            <input type="text" class="form-control rounded  border border-dark" placeholder="Enter Last name" onChange={(e)=>setPrenom(e.target.value)} /> 
                            {error && !prenom &&<span className='eroor'  > &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<b>champ obligatoire*</b></span>}
                
                        </div>
                        <div class="form-group mb-4">
                            
                            <input type="number" class="form-control rounded  border border-dark" placeholder="Numéro du téléphone" onChange={(e)=>setNum_tel(e.target.value)}/>
                            {error && tel.length !=8 && <span className='eroor'  ><b>Numéro du téléphone doit contenir 8 chiffres</b></span>}        
                            {error && tel<0 &&<span className='eroor'  > &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<b>Numro du téléphone doit étre posistive </b></span>}
                
                        </div>
                        <div class="form-group">
                            
                            <input type="text" class="form-control rounded  border border-dark" placeholder="Email"  onChange={(e)=>setEmail(e.target.value)} /> 
                            {error && !email &&<span className='eroor'  > &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<b>champ obligatoire*</b></span>}
                            {error && !regEx.test(email) &&<span className='eroor'  > &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<b>email invalide</b></span>}
                
                        </div> <div class="form-group">
                            
                            <input type="password" class="form-control rounded  border border-dark" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                            {error && motDePasse.length<6 && <span className='eroor'  ><b>Mot de passe doit contenir minimum 6 caractére</b></span>}        
                         
                        </div>
            
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className='btn11' style={{ width:"100%"}} onClick={() =>Add()}>Sign up</button>
                        </form>
                    </div>
                    </div>
                </div>
                </div></div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default SignUp