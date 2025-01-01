import Header from './Header'; //Include Header
import Footer from './Footer'; //Include Footer
import React, { useEffect, useState } from "react";
import swal from 'sweetalert';
import "./Login.css"
import { Link } from 'react-router-dom';
import {useHistory , useParams} from 'react-router-dom'
import { NavLink, useNavigate } from "react-router-dom";
function Checkout() {
    let {_id} =useParams();
    console.log("id",_id)
    const[firstName , setFirstname]=useState("")
    const[lastName , setLastname]=useState("")
    const[auteur , setAuteur]=useState("")
    const[adresse , setAdresse]=useState("")
    const[city, setCity]=useState("")
    const[phone , setPhone]=useState("")
    const[ quantite, setQuantite]=useState(0)
    const[ Couleur, setCouleur]=useState("")
    const[email, setEmail]=useState("")
    const navigate = useNavigate();
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
   
    const[error , setError]=useState(false);
    async function Add() {
        
        let item = {
          nom: lastName,
          prenom: firstName,
          Num_tel: phone,
          adresse: adresse,
          city: city,
          email: email,
          quantité: quantite, // Assuming a default quantity of 1 for the "book"
          produits: _id, // Assuming bookName is a product reference or book ID
          // Could map to a field in the backend schema
        };
    
        try {
          // API call to add a new "commande"
          let result = await fetch("http://localhost:3000/add-commande", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
              "Content-Type": 'application/json',
              "Accept": 'application/json'
            }
          });
    
          let response = await result.json(); 
    
          // Handling success
          if (result.ok && response) {
            navigate('/produits'); 
          } else {
            // Handling failure
            swal({
              title: "Echec d'ajout'",
              text: response.message || "Une erreur est survenue",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            });
          }
        } catch (error) {
          // Handling network or other unforeseen errors
          swal({
            title: "Erreur",
            text: "Échec de la connexion au serveur. Réessayez plus tard.",
            icon: "error",
            dangerMode: true,
          });
        }
      }
    return (
        <div className="checkout-container">
            <Header></Header>
            <section >
          
            <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                <div class="content text-center">
                 
        
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb bg-transparent justify-content-center">
                  
                    </ol>
                </nav>
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
                            <h4 class="mb-4" >&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;Checkout Details</h4>
                            <form class="checkout-form">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group mb-4">
                                        <label for="first_name">First Name</label>
                                        
                                        <input type="text" class="form-control" style={{backgroundColor:"transparent"}} id="first_name" placeholder=" first name" onChange={(e)=>setFirstname(e.target.value)}/>
                                        {error && !firstName &&<span className='eroor'  > &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<b>champ obligatoire*</b></span>}
                
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group mb-4">
                                        <label for="last_name">Last Name</label>
                                        <input type="text" class="form-control" style={{backgroundColor:"transparent"}} id="last_name" placeholder="last name" onChange={(e)=>setLastname(e.target.value)} />
                                        {error && !lastName &&<span className='eroor'  > &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<b>champ obligatoire*</b></span>}
                
                                    </div>
                                </div>
                               
                               
        
                                <div class="col-lg-12">
                                    <div class="form-group mb-4">
                                        <label for="first_name">Address</label>
                                        <input type="text" class="form-control" style={{backgroundColor:"transparent"}} id="street" placeholder="address" onChange={(e)=>setAdresse(e.target.value)} />
                                        {error && !adresse &&<span className='eroor'  > &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<b>champ obligatoire*</b></span>}
                
                                    </div>
                                </div>
                                
        
                                <div class="col-lg-12">
                                    <div class="form-group mb-4">
                                        <label for="first_name">City </label>
                                        <input type="text" class="form-control" style={{backgroundColor:"transparent"}} id="city" placeholder='city' onChange={(e)=>setCity(e.target.value)} />
                                        {error && !city &&<span className='eroor'  > &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<b>champ obligatoire*</b></span>}
                
                                    </div>
                                </div>
        
                               
                                <div class="col-lg-12">
                                    <div class="form-group mb-4">
                                        <label for="first_name">Phone </label>
                                        
                                        <input type="text" class="form-control" style={{backgroundColor:"transparent"}} id="phone" placeholder="phone number" onChange={(e)=>setPhone(e.target.value)}/>
                                        {error && phone.length !=8 &&<span className='eroor'  > &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<b>Numéro du téléphone doit contenir 8 chiffres*</b></span>}
                                        {error && phone<0 &&<span className='eroor'  > &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<b>Numéro du téléphone doit étre posistive </b></span>}
                
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group mb-4">
                                        <label for="first_name">Email address </label>
                                        <input type="email" class="form-control" style={{backgroundColor:"transparent"}} id="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
                                        {error && !email &&<span className='eroor'  > &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<b>champ obligatoire*</b></span>}
                                        {error && !regEx.test(email) &&<span className='eroor'  > &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<b>email invalide</b></span>}
                
                                    </div>
                                </div>
        
                                <div class="col-lg-12">
                                    <div class="form-group mb-4">
                                        <label for="first_name">Quantity </label>
                                        <input type="number" class="form-control" style={{backgroundColor:"transparent"}} id="Quantity" placeholder="Quantity" onChange={(e)=>setQuantite(e.target.value)} />
                                        
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;  <a class="boutonss orderbtn btn btn-main btn-small" onClick={() =>Add()}>buy</a>

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
export default Checkout;