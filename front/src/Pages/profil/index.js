import React, { useEffect, useState } from "react";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import AppHeaderEcrivain from '../../Components/App HeaderEcrivain';
import SideMenuEcrivain from '../../Components/sideMenuEcrivain';
import img from '../../assets/p.png';
import 'font-awesome/css/font-awesome.min.css';

function Profil() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Num_tel, setNum_tel] = useState("");
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    
    if (storedUser && storedToken) {
      const userObject = JSON.parse(storedUser);
      console.log(userObject.email);
      setUser(userObject);
      setEmail(userObject.email);
      setNum_tel(userObject.tel);
      setToken(storedToken);
    }
  }, []);

  const updateUser = async () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userId = JSON.parse(storedUser)._id;
      const item = { email, Num_tel };
      console.warn("id:", userId);

      try {
        const response = await fetch(`http://localhost:3000/api/updateUser/${userId}`, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(item)
        });

        if (response.ok) {
          const resp = await response.json();
          console.warn(resp);

          swal({
            title: "Modifié avec succès",
            icon: "success",
            button: "Valider",
          });

        } else {
          console.error('Erreur lors de la mise à jour de l’utilisateur:', response.statusText);
        }
      } catch (error) {
        console.error('Erreur lors de la mise à jour de l’utilisateur:', error);
      }
    }
  };

  return (
    <section>
      <div className="App1">
        <AppHeaderEcrivain />
        <div className="SideMenuAndPageContent">
          <SideMenuEcrivain />
          <div className="registers">
            <div className="col-11">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src={img} className='img' alt="Profile" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <h1 className='titreee'><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Profil</b></h1>
              
              <form id='forms' className='flex flex-col'>
                <input 
                  type="text" 
                  placeholder='Numéro du téléphone' 
                  className='i1' 
                  defaultValue={user.tel} 
                  onChange={(e) => setNum_tel(e.target.value)} 
                  style={{backgroundColor:"transparent"}}
                />
                <input 
                  type="text" 
                  placeholder='Email' 
                  className='i1' 
                  defaultValue={user.email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  style={{backgroundColor:"transparent"}}
                />
                <button type="button" className='btn' onClick={updateUser}>
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profil;
