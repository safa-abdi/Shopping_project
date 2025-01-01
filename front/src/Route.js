import { Space } from "antd";
//import "./App.css";
import AppFooter from "./Components/AppFooter";
import AppHeader from "./Components/AppHeader";
import PageContent from "./Components/PageContent";
import SideMenu from "./Components/SideMenu";
import Login from './acceuil';
import Dash from "./dash";
import Inventory from "./Pages/Inventory";
import AjoutClient from "./Pages/AjoutClient";
import AjoutEcrivain from "./Pages/AjoutEcrivain";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Form from "./inscription";
import Customers from "./Pages/Customers";

import Livres from "./Pages/livres";
import DashEcrivain from "./dashEcrivain";
import Background from "./b";
import Profil from "./Pages/profil";
import Liv from "./Pages/ajoutLivre";
import Update from "./Pages/updateLivre/inde";
function Route() {
  return (
   
      
     <Routes>
     <Route path='/' element={<Login/>}/>
     <Route path='/home' element={<Dash/>}/>
     <Route path='/inventory' element={<Inventory/>}/>
     <Route path='/AjoutC' element={<AjoutClient/>}/>
     <Route path='/AjoutE' element={<AjoutEcrivain/>}/>
     <Route path='/customers' element={<Customers/>}/>
     <Route path='/register' element={<Form/>}/>
     <Route path='/livre' element={<Livres/>}/>
     <Route path='/dashEcrivain' element={<DashEcrivain/>}/>
     <Route path='/profil' element={<Profil/>}/>
    <Route path="/ajoutL" element={<Liv />}/>
    <Route path="/update/:id" element={<Update />}/>
     
     </Routes>


  );
}
export default Route;
