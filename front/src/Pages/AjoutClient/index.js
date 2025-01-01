import { useForm } from 'react-hook-form';
import AppHeader from '../../Components/AppHeader';
import SideMenu from '../../Components/SideMenu';
import swal from 'sweetalert';
import img from'../../assets/admin.png'
import React, {useEffect, useState} from "react";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

function AjoutClient() {
  

  const[nom , setNom]=useState("")
  const[email , setEmail]=useState("")
  const[password , setPassword]=useState("")
  const[prenom , setPrenom]=useState("")
  const[Num_tel, setNum_tel]=useState("")
 
  
  const[error , setError]=useState(false);

  
    async function Add(){

      if( !email || !password   || password.length<6){
        setError(true);
        return false;
          
      }

        let item = {nom , email ,prenom , Num_tel, password }
        console.warn(item)
        let result = await fetch("http://localhost:3000/api/users" , {
            method: 'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type" : 'application/json',
                "Accept" : 'application/json'
            }
        })
       
        result = await result.json();
        if(result){
          alert("ajout")
          swal({
            title: "Ajout avec succeès",
            icon: "success",
            button: "Valider",
          });
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
   
 
   <section>
     <div className="App1">
      <AppHeader></AppHeader>
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <div className="registers">
      
            <div className="col-11">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={img} className='img'></img>
                
                <h1 className='titreee'><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ajout Client</b></h1>
              
                
                <form id='forms' className='flex flex-col' > 
                <input type="text"  placeholder='Nom'  onChange={(e)=>setNom(e.target.value)} />
                
                
                <input type="text"  placeholder='Prenom' className='i1' onChange={(e)=>setPrenom(e.target.value)}  ></input>
                
                <input type="text"  placeholder='Numéro du téléphone'  onChange={(e)=>setNum_tel(e.target.value)} />
                    
                    
                <input type="text"  placeholder='Email' className='i1'  onChange={(e)=>setEmail(e.target.value)}  ></input>
                {error && !email &&<span className="text-sm text-red-600 grid grid-cols-2 " > &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<b>champ obligatoire*</b></span>}
                       
                    <input type="text" placeholder='Password'  onChange={(e)=>setPassword(e.target.value)} />
                    
                    {error && !password &&<span className="text-sm text-red-600 grid grid-cols-2 " >&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>champ obligatoire *</b></span>}
                        {error && password.length<6 && <span className="text-sm text-red-600 grid grid-cols-2 " >&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Mot de passe doit contenir minimum 6 caractére</b></span>}        
                        
                  
                    <button className='btn'  onClick={() =>Add()}>Ajouter</button>
                    
                </form>
            </div>
            </div>

     </div>
     </div>
    </section>
  );
}
export default AjoutClient;
