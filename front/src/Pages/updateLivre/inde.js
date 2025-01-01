import { useForm } from 'react-hook-form';
import AppHeaderEcrivain from '../../Components/App HeaderEcrivain';
import SideMenuEcrivain from '../../Components/sideMenuEcrivain';
import React, {useEffect, useState} from "react";
import swal from 'sweetalert';
import img from'../../assets/bou.jpg'
import { useNavigate } from "react-router-dom";
import {useHistory , useParams} from 'react-router-dom'
<link rel="stylesheet" 
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

function Update() {
  
    const [prix, setPrix] = useState()
    const [caracteristique, setCaracterstique] = useState()
    const [nomProduit, setNomProduit] = useState()
    const [user, setUser] = useState()
    const [token, setToken] = useState()
    const navigate = useNavigate();
    
    useEffect(() => {
      if (localStorage.getItem('token')) {
          setUser(JSON.parse(localStorage.getItem('user')))
          setToken(localStorage.getItem('token'))
        
   
      } 
  }, [])

 
  function update()
  {
    let item={prix , nomProduit , caracteristique }
   
    fetch(`http://localhost:3000/api/updateProduit/${id}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
     console.warn(resp)
       
    // navigate('/dashEcri')
      })
      swal({
        title: "modifier avec succeès",
        icon: "success",
        button: "Valider",
      });
      navigate("/home");
    })
  }
  let {_id} =useParams();
  let id=_id;
     console.log("id",id)
  const [data , setData] = useState([]);
  async function getLivre(){
    let result = await fetch(`http://localhost:3000/getProduitParid/${_id}`,{
      method:"GET"
    }); 
    result = await result.json();
    setData(result)
    console.log(data);

   }
   useEffect(() =>{
    getLivre();
} , [])
 
  return (
   
 
   <section>
     <div className="App1">
      <AppHeaderEcrivain></AppHeaderEcrivain>
      <div className="SideMenuAndPageContent">
        <SideMenuEcrivain></SideMenuEcrivain>
        <div className="registers">
        {
                                data.map((item , key) => (
        <div className="col-11">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <img src={img} className='img1'  ></img>
                <h1 className='titreee'><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Produit</b></h1>
              
                
                
                <form id='forms' className='flex flex-col' > 
                
                <input type="text"  placeholder='Nom du produit' className='i1'defaultValue={item?.nomProduit} onChange={(e)=>setNomProduit(e.target.value)}  />
                    
                    
                <input type="number"  placeholder='Prix' className='i1'   defaultValue={item.prix} onChange={(e)=>setPrix(e.target.value)}></input>
                    
                    <textarea defaultValue={item.caracteristique} rows={5} onChange={(e)=>setCaracterstique(e.target.value)}  cols={7}></textarea>
                     
                  
                    <button className='btn' onClick={update} >Modifier</button>
                    
                </form>
            </div>
                                ))}
            </div>

     </div>
     </div>
    </section>
  );
}
export default Update;
