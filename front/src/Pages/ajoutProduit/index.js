import React, { useEffect, useState } from "react";

import img from '../../assets/ajoutL.png'
import image from "../../assets/b3.jpg";
import { NavLink, useNavigate } from "react-router-dom";

import AppFooterEcrivain from "../../Components/AppFooterEcrivain";
import SideMenuEcrivain from "../../Components/sideMenuEcrivain";
import AppHeaderEcrivain from "../../Components/App HeaderEcrivain";

import swal from 'sweetalert';
export default function Liv() {
    const navigate = useNavigate();
    const [user, setUser] = useState()
    const [token, setToken] = useState()
    useEffect(() => {
        setUser(localStorage.getItem('user'))
        setToken(localStorage.getItem('token'))
        console.log(localStorage.getItem('user'))
    }, [])

    const [nomProduit, setNommProduit] = useState("")
    const [type, setType] = useState("")
    const [couleur, setCouleur] = useState([]);  // Array to store selected colors
const [size, setSize] = useState([]);        // Array to store selected sizes

    const [caracteristique, setCategorie] = useState("")
    const [description, setDescription] = useState("")
    const [prix, setPrix] = useState("")
    const [image, setSelectedFile] = useState(null);

    const [error, setError] = useState(false);

    const handleFileInputChange = (event) => {
        setSelectedFile(event.target.files[0]);
    }
    const handleCouleurChange = (e) => {
        setCouleur(Array.from(e.target.selectedOptions, option => option.value));
    };
    
    const handleSizeChange = (e) => {
        setSize(Array.from(e.target.selectedOptions, option => option.value));
    };
    
    async function Add() {
        // Input validation: Check if all required fields are filled
        if (!nomProduit || !type || !caracteristique || !prix) {
            setError(true);
            return false;
        }
    
        // Log the user ID from localStorage
        console.log(JSON.parse(localStorage.getItem('user'))?._id);
    
        // Create FormData object to send product data and image
        const formData = new FormData();
        formData.append('nomProduit', nomProduit);
        formData.append('type', type);
        formData.append('caracteristique', caracteristique);
        formData.append('prix', prix);
        formData.append('image', image);  // Ensure image is correctly set
        formData.append('utilisateurr', JSON.parse(localStorage.getItem('user'))?._id);
    
        try {
            // Make the API request to register the product
            let result = await fetch("http://localhost:3000/registerProduit", {
                method: 'POST',
                body: formData,
            });
    
            // Parse the JSON response
            result = await result.json();
    
            // Check the response message to decide success or failure
            if (result.msg === 'enregistrer avec succes') {
                swal({
                    title: "Produit enregistré avec succès",
                    icon: "success",
                    button: "OK",
                });
            } else {
                swal({
                    title: "Erreur lors de l'enregistrement du produit",
                    icon: "error",
                    button: "OK",
                });
            }
        } catch (error) {
            // Handle any error that occurs during the fetch request
            console.error("Erreur lors du téléchargement de l'image: ", error);
            swal({
                title: "Erreur lors du téléchargement de l'image",
                icon: "error",
                button: "OK",
            });
        }
    }
    

    return (
        <section>
            <div className="App1">
                <AppHeaderEcrivain></AppHeaderEcrivain>
                <div className="SideMenuAndPageContent">
                    <SideMenuEcrivain></SideMenuEcrivain>
                    <div className="registers">
                        <div className="col-11">
                            <form id='forms' className='flex flex-col' action="#">
                                <h2>Add a product</h2>
                                <input type="file" onChange={handleFileInputChange}></input>
                                <input type="text" style={{backgroundColor:'transparent'}} placeholder='Product name' onChange={(e) => setNommProduit(e.target.value)} />
                                {error && !nomProduit && <span className='eroor'><b>champ obligatoire*</b></span>}
                                
                                <select className='i1' value={type} onChange={(e) => setType(e.target.value)} style={{border:"1px"}}>
                                    <option value="">Select product type</option>
                                    <option value="Blouse">Blouse</option>
                                    <option value="Hijab">Hijab</option>
                                    <option value="BlouseFille">Blouse Fille</option>
                                    <option value="Cap">Cap</option>
                                    <option value="Capuche">Hood</option>
                                    <option value="Comb">Comb</option>
                                    <option value="CoverPhone">Cover Phone</option>
                                    <option value="Cup">Cup</option>
                                    <option value="HandBag">HandBag</option>
                                    <option value="PontalonFemme">Women's pants</option>
                                    <option value="PontalonFille">Girl's pants</option>
                                    <option value="PontalonHomme">Men's pants</option>
                                    <option value="PontalonBoy">Pontalon Boy</option>
                                    <option value="RobeCourte">Robe Courte</option>
                                    <option value="RobeLonge">Robe Long</option>
                                    <option value="RobeFille">Robe Fille</option>
                                    <option value="Satchel">Satchel</option>
                                    <option value="Shirt">Shirt</option>
                                    <option value="ShirtBoy">Shirt Boy</option>
                                    <option value="ShortBoy">Short Boy</option>
                                    <option value="TichertFille">Tichert Fille</option>
                                    <option value="TichertFemme">Tichert Femme</option>
                                    <option value="TichertBoy">Tichert Boy</option>
                                    <option value="capuche">Hood</option>
                                </select>
                                {error && !type && <span className='eroor'><b>champ obligatoire*</b></span>}
                                
                                <textarea type="text" placeholder='Characteristic' rows={5} onChange={(e) => setCategorie(e.target.value)} />
                                {error && !caracteristique && <span className='eroor'><b>champ obligatoire*</b></span>}

                                <input type="text" placeholder='Price' onChange={(e) => setPrix(e.target.value)}  style={{backgroundColor:'transparent'}} />
                                {error && !prix && <span className='eroor'><b>champ obligatoire*</b></span>}

                                <button className='btn' style={{marginBottom:"10px"}}onClick={() => Add()}>Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
