/*import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import AppHeaderEcrivain from "../../Components/App HeaderEcrivain";
import SideMenuEcrivain from "../../Components/sideMenuEcrivain";
import swal from 'sweetalert';
import image from '../../assets/dd.png'
function Livres() {
  
  const [user, setUser] = useState()
    const [token, setToken] = useState()
   /* useEffect(() => {
      if (localStorage.getItem('token')) {
          setUser(JSON.parse(localStorage.getItem('user')))
          setToken(JSON.parse(localStorage.getItem('token')))
      } 
  }, [])*/
/*const [data , setData] = useState([]);
  useEffect(() =>{
    //console.log(user._id)
      getClient();
  } , [])
  
 

  async function getClient(){
    let result = await fetch("http://localhost:3001/api/SelectLivre"); 
    result =  result.json();
    setData(result)


   }
  return (
    <div className="App1">
    <AppHeaderEcrivain></AppHeaderEcrivain>
    <div className="SideMenuAndPageContent">
      <SideMenuEcrivain></SideMenuEcrivain>
    <div className="">
    <section >
      <div >
      <h1 size='20px'><b><br className="liv"></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;Liste des Livres</b></h1><br /><br/>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="lg:flex items-center">
              <div className="relative w-full px-4 max-w-full flex">
               
                
              </div>
              
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="tablL" width="1000px" >
              <thead >
                <tr className="headL">

                  
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                   Titre
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                 auteur
                  </th>

                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                   Catégorie
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                   Description
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                   Prix
                  </th>
                  
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                   &nbsp;&nbsp;&nbsp;&nbsp; Actions
                  </th>
                </tr>
              </thead>
             
              <tbody className="heads">
                  {" "} {
                                data.map((item , index) => (
                                  <div key={index}>
                                    <tr >
                                        
                                       
                                       
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                            {
                                            item.titre
                                        } 
                                        {" "}</td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                            {
                                            item.auteur
                                        }
                                        {" "} </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {
                                            item.categorie}
                                            {" "} </td>
                                        
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {
                                            item.description
                                        }
                                        {" "} </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {item.prix
                                        }
                                        {" "} </td>
                                        
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 flex">
                                            
                                        <span  ><figure>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              &nbsp;&nbsp;<img src={image} width="20px" height="20px" />
                            </figure></span>
                                           
                                        
                                             
                                        </td>
                                    </tr></div>
                                )
                                )
                               
                            } </tbody>
              
              {" "}
             
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>

</div>
</div>

  );
}
export default Livres;*/
//import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";

import AppHeaderEcrivain from "../../Components/App HeaderEcrivain";
import SideMenuEcrivain from "../../Components/sideMenuEcrivain";
import Modal from 'react-modal';
import image from '../../assets/dd.png'
import swal from 'sweetalert';
import images from '../../assets/update.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
function Produits() {


  


  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Nombre d'éléments par page
 
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [prix, setPrix] = useState();
  const [caracteristique, setCaracterstique] = useState();
  const [nomProduit, setNomProduit] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false); // état pour gérer la popup
  const [selectedProduct, setSelectedProduct] = useState(null); // état pour le produit sélectionné

  useEffect(() => {
    
      const storedUser = localStorage.getItem('user');
      const storedToken = localStorage.getItem('token');
    
   //   user=localStorage.getItem('user')
setUser(storedToken)
console.log("user:"+storedUser?.nom)
      if (storedUser && storedToken) {
          setUser(JSON.parse(storedUser));
          setToken(storedToken);
      }
  }, []);
  const [data , setData] = useState([]);
  useEffect(() =>{
      getProduit();
  } , [])
 
    
    async function getProduit(){
console.log(localStorage.getItem('user').utilisateurr)
      let result = await fetch(`http://localhost:3000/getProduitByUser/${JSON.parse(localStorage.getItem('user'))?._id}`,{
        method:"GET"
      }); 
      result = await result.json();
      setData(result)
  
  
     }
  
  
     const indexOfLastItem = currentPage * itemsPerPage;
     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
     const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
 
     // Changer de page
     const nextPage = () => {
         if (currentPage < Math.ceil(data.length / itemsPerPage)) {
             setCurrentPage(currentPage + 1);
         }
     };
 
     const prevPage = () => {
         if (currentPage > 1) {
             setCurrentPage(currentPage - 1);
         }
     };
 
   async function searchLivre(key){
    console.warn(key)
    let result = await fetch('http://localhost:3000/searchLivre/'+key);
    result= await result.json();
    console.warn(result)
   setData(result)
   
}
const openModal = (product) => {
  setSelectedProduct(product);
  setNomProduit(product.nomProduit);
  setPrix(product.prix);
  setCaracterstique(product.caracteristique);
  setIsModalOpen(true); // Ouvre la popup
};

const closeModal = () => {
  setIsModalOpen(false); // Ferme la popup
};

const update = async () => {
  let item = { prix, nomProduit, caracteristique };
  try {
    const result = await fetch(`http://localhost:3000/api/updateProduit/${selectedProduct._id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    });
    if (result.ok) {
      const resp = await result.json();
      console.warn(resp);
      swal({
        title: "Produit modifié avec succès",
        icon: "success",
        button: "Valider",
      });
      closeModal(); // Fermer la popup après la mise à jour
      getProduit()
    }
  } catch (error) {
    console.error("Erreur lors de la modification du produit:", error);
  }
};
   async function deleteClient(_id){
    if(window.confirm("êtes-vous sûr de  supprimer cette produit")){
    let result = await fetch('http://localhost:3000/api/deleteProduit/'+_id , {
      method: 'DELETE'
    });
    result = await result.json();
    if(result){
        swal({
          title: "Supprimeé avec succeès",
          icon: "success",
          button: "Valider",
        });
      }
      else{
          swal({
              title: "Echec de suppression ",
             
              icon: "warning",
              buttons: true,
              dangerMode: true,
            });
      }
    getProduit();
  }}

  return (
    <div className="App1">
    <AppHeaderEcrivain></AppHeaderEcrivain>
    <div className="SideMenuAndPageContent">
      <SideMenuEcrivain></SideMenuEcrivain>
    <div className="">
    <section >
      <div >
      
      <h1  size="10px"><br className="lc"></br>&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;  
    <b className="ouma"><u>List of your products</u></b></h1><br />
    
        <div >
         
        
          <div>
            <table className="tablC" width="1200px" >
              <thead >
              <tr className="headL">
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Image 
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Product name 
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Type
                  </th>
                 

                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price
                  </th>
                 
                  
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Actions
                  </th>
                </tr>
              </thead>
              <tbody className="heads"> {
                                currentItems.map((item , key) => (
                                    <tr key={key}>
                                        
                                        <td >
                      <img src={item?.image} width="100px" height="100px" />
                      </td>
                                       
                                        <td >
                                            {
                                            item.nomProduit
                                        } </td>
                                        <td >
                                            {
                                            item.type
                                        } </td>
                                       
                                        
                                        
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {
                                            item.prix
                                        } </td>
                                        
                                        <td>
  <div style={{ display: 'inline-flex', alignItems: 'center' }}>
    <span onClick={() => deleteClient(item._id)}>
      <figure className="s1" style={{ margin: '0 10px' }}>
        <img src={image} width="20px" height="20px" alt="Delete" />
      </figure>
    </span>
    <span className="s1">
      <figure style={{ margin: '0 10px' }} onClick={() => openModal(item)}>
       
          <img src={images} width="20px" height="20px" alt="Update" />
    
      </figure>
    </span>
  </div>
</td>

                                    </tr>
                                ))
                            } </tbody>
              
             
            </table>
            <div style={{ display: 'flex', gap: '20px' ,marginLeft:500}}> {/* Adjust the gap as needed */}
            <button 
                onClick={prevPage} 
                disabled={currentPage === 1}
            >
                <FontAwesomeIcon icon={faChevronLeft} style={{ marginRight: '5px' }} /> {/* Icon for "Précédent" */}
                
            </button>
            <button 
                onClick={nextPage} 
                disabled={currentPage >= Math.ceil(data.length / itemsPerPage)}
            >
                
                <FontAwesomeIcon icon={faChevronRight} style={{ marginLeft: '5px' }} /> {/* Icon for "Suivant" */}
            </button>
        </div>

          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Modifier le produit" ariaHideApp={false} style={{
    content: {
      width: "500px", // Set your desired width here
      margin: "auto", 
      height:"650px",// This will center the modal horizontally
      padding: "20px", // Adjust padding if needed
      borderRadius: "10px", // Optional: for rounded corners
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: for a dim background effect
    },
  }}
>
       
{selectedProduct && (
    <form id='forms' className='flex flex-col'>
      <h1><b>Update Product</b></h1>
      <label htmlFor="nomProduit"><b>Product name:</b>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
      <input 
        type="text" 
        id="nomProduit"
        style={{backgroundColor:"transparent"}}
        placeholder='Nom du produit' 
        className='i1' 
        defaultValue={nomProduit} 
        onChange={(e) => setNomProduit(e.target.value)} 
      />

      <label htmlFor="prix" ><b>Price:</b>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</label>
      <input 
        type="number" 
        id="prix"
        placeholder='Prix' 
        className='i1' 
        defaultValue={prix} 
        onChange={(e) => setPrix(e.target.value)} 
      />

     
      <textarea defaultValue={caracteristique} rows={8} onChange={(e) => setCaracterstique(e.target.value)} cols={7}></textarea>

      <button type="button" className='btn' onClick={update}>Modifier</button>
      <button type="button" className='btn' onClick={closeModal}>Fermer</button>
    </form>
  )}
      </Modal>
    </section>
  </div>

</div>
</div>

  );
}
export default Produits;

