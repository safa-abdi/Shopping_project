import { useForm } from 'react-hook-form';
import AppHeader from '../../Components/AppHeader';
import SideMenu from '../../Components/SideMenu';
import React, {useEffect, useState} from "react";
import swal from 'sweetalert';
import img from'../../assets/ecrvain.png'

<link rel="stylesheet" 
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

function AjoutEcrivain() {
  
 

  const[nom , setNom]=useState("")
  const[email , setEmail]=useState("")
  const[password , setPassword]=useState("")
  const[prenom , setPrenom]=useState("")
  const[Num_tel, setNum_tel]=useState("")
 
  
  const[error , setError]=useState(false);
    async function Add(){

        let item = {nom , email ,prenom , Num_tel, password }
        console.warn(item)
        let result = await fetch("http://localhost:3000/api/ajoutEcrivain" , {
            method: 'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type" : 'application/json',
                "Accept" : 'application/json'
            }
        })
       
        result = await result.json();
        console.warn(result)
        if(result){
          alert("inscription avec succée")
          swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )}
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
   
 
   <section>
     <div className="App1">
      <AppHeader></AppHeader>
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <div className="registers">
      
        <div className="col-11">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <img src={img} className='img'></img>
                <h1 className='titreee'><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ajout Ecrivain</b></h1>
              
                
                
                <form id='forms' className='flex flex-col' > 
                <input type="text"  placeholder='Nom'  onChange={(e)=>setNom(e.target.value)} />
                
                
                <input type="text"  placeholder='Prenom' className='i1' onChange={(e)=>setPrenom(e.target.value)}  ></input>
                
                <input type="text"  placeholder='Numéro du téléphone'  onChange={(e)=>setNum_tel(e.target.value)} />
                    
                    
                <input type="text"  placeholder='Email' className='i1'  onChange={(e)=>setEmail(e.target.value)}  ></input>
                       
                    <input type="text" placeholder='Password'  onChange={(e)=>setPassword(e.target.value)} />
                    
                     
                  
                    <button className='btn'  onClick={() =>Add()}>Ajouter</button>
                    
                </form>
            </div>
            </div>

     </div>
     </div>
    </section>
  );
}
export default AjoutEcrivain;
