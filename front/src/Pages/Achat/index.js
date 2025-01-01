
import { useEffect, useState } from "react";

import AppHeaderEcrivain from "../../Components/App HeaderEcrivain";
import SideMenuEcrivain from "../../Components/sideMenuEcrivain";

import image from '../../assets/dd.png'
import swal from 'sweetalert';
import images from '../../assets/update.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
function Achat() {


  const [user, setUser] = useState()
  const [token, setToken] = useState()
  const[id , setId]=useState()
  useEffect(() => {
    if (localStorage.getItem('token')) {
        setUser(JSON.parse(localStorage.getItem('user')))
        setToken(localStorage.getItem('token'))
       console.log(user);
       let id=user?.prenom;
       console.log("id:"+id);
    } 
}, [])
  




  const [data , setData] = useState([]);
  useEffect(() =>{
      getlivre();
  } , [])
  async function getlivre(){
    console.log(user)
    let result = await fetch(`http://localhost:3000/commandes-par-utilisateur/${JSON.parse(localStorage.getItem('user'))?._id}`,{
      method:"GET"
    }); 
    result = await result.json();
    setData(result)


   }

   const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Nombre d'éléments par page
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
  

  return (
    <div className="App1">
    <AppHeaderEcrivain></AppHeaderEcrivain>
    <div className="SideMenuAndPageContent">
      <SideMenuEcrivain></SideMenuEcrivain>
    <div className="">
    <section >
      <div >
      
      <h1  size="10px"><b className="ouma"><br className="lc"></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
    <u>Purchase requests</u></b></h1>
    
        <div >
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="lg:flex items-center">
              <div className="relative w-full px-4 max-w-full flex">
               
               
              </div>
              
            </div>
          </div>
          <div>
            <table className="tablC" width="1200px" >
              <thead >
              <tr className="headL">
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; First Name
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Last Name 
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Adress
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; City
                  </th>

                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Phone
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Product
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quantity
                  </th>
                  
                  
                </tr>
              </thead>
              <tbody className="heads"> {
                                currentItems.map((item , key) => (
                                    <tr key={key}>
                                       
                                        <td >
                                            {
                                            item.nom
                                        } </td>
                                        <td >
                                            {
                                            item.prenom
                                        } </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {
                                            item. adresse} </td>
                                        
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {
                                            item.city
                                        } </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {
                                            item.Num_tel
                                        } </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {
                                            <img src={item?.produits.image} width="100px" height="100px" />
                                        } </td>
                                         <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {
                                            item.email
                                        } </td>
                                         <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {
                                            item.quantité
                                        } </td>
                                       
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
    </section>
  </div>

</div>
</div>

  );
}
export default Achat;

