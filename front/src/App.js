import Header from './Header'; //Include Header
import Footer from './Footer'; //Include Footer
import Home from './Home'
import Accessoire from './accessoire';
import Shop from './Shop'
import SingleProduct from './SingeleProduct'
import Checkout from './Checkout'
import Contact from './contact'
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import Genres from './Genres';
import Aboutus from './Aboutus';
import Form from './inscription';
import TichertFemme from './TchertFemme';
import Achat from './Pages/Achat';
import Livres from './Pages/produits';
import Liv from './Pages/ajoutProduit';
import Update from './Pages/updateLivre/inde';
import Profil from './Pages/profil';
import Product from './produit';
import RobeFille from './robeFille';
import PontalonFille from './PontalonFille';
import TichertEnafantBoy from './TichertEnfantGar';
import ShortBoy from './ShortEnfant';
import ShirtBoy from './shirtBoy';
import PontalonBoy from './PontalonoyEnfant';
import BlouseFille from './BlouseFille';
import Produits from './Pages/produits';
import FilleEnf from './filleGarc';
import CapucheFemme from './CapucheFemme';
import LongDress from './LongDressFemme';
import WatterBootle from './WtterBottle';
import CoverPhone from './CoverPhone';
import Comb from './comb';
import Cup from './cup';
import Satchel from './Satchel';
import HandBag from './HandBag';
import Hijab from './Hijab';
import CategorieHomme from './sousCategorieHomme';
import LoginClient from './LoginClient';
import SignUpClient from './signupClient';
import CategorieFemme from './sousCatégorieFemme';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import CategorieEnfant from './SounCategorieEnfant';
import CategorieFille from './SousCategorieFille';
import RobeCourte from './RobeCourteFemme';
import Blouse from './BlouseFemme';
import PontalonF from './pontalonFemme';
import Cap from './cap';
import PontalonHomme from './pontalonHomme';
import TichertHomme from './TichertHomme';
import Shirt from './Shirt';
import TichertFille from './TichertFemme';
import Modal from './Modal';
import DashEcrivain from './dashEcrivain';
function App() {
  return (
    <div className="Appp">
      
        <BrowserRouter>
         
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blouseF" element={<BlouseFille />} />
            <Route path="/dash" element={<DashEcrivain />} />
            <Route path="/Modal" element={<Modal />} />
            <Route path="/robe" element={<RobeFille />} />
            <Route path="/tichertB" element={<TichertEnafantBoy />} />
            <Route path="/pontalonB" element={<PontalonBoy />} />
            <Route path="/achat" element={<Achat />} />
            <Route path="/produit" element={<Produits />} />
            <Route path="/pontalonF" element={<PontalonF />} />
              <Route path="/shortB" element={<ShortBoy />} />
              <Route path="/tichertF" element={<TichertFille />} />
              <Route path="/shirtB" element={<ShirtBoy />} />
              <Route path="/produits" element={<Product />} />
              <Route path="/single-product/:_id" element={<SingleProduct />} />
              <Route path="/checkout/:_id" element={<Checkout />} />
              <Route path="/capucheF" element={<CapucheFemme />} />
              <Route path="/checkouts" element={<Checkout />} />
              <Route path="/SounCategorieBoy" element={<CategorieEnfant />} />
              <Route path="/categorieenfant" element={<FilleEnf />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/loginClient" element={<LoginClient />} />
              <Route path="/signupClient" element={<SignUpClient />} />
              <Route path="/genres" element={<Genres />} />
              <Route path="/hijab" element={<Hijab />} />
              <Route path="/caegorieFemme" element={<CategorieFemme />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/Fille" element={<CategorieFille />} />
              <Route path="/accessoire" element={<Accessoire />} />
              <Route path="/robeCourte" element={<RobeCourte />} />
              <Route path="/longDress" element={<LongDress />} />
              <Route path="/blouse" element={<Blouse />} />
              <Route path="/cap" element={<Cap />} />
              <Route path="/pontalonH" element={<PontalonHomme />} />
              <Route path="/shirt" element={<Shirt />} />
              <Route path="/tichertH" element={<TichertHomme />} />
              <Route path="/aboutus" element={<Aboutus/>} />
              <Route path='/form' element={<Form/>}/>
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path='/tichertFemme' element={<TichertFemme/>}/>
              <Route path='/pontalonF' element={<PontalonF/>}/>
              <Route path='/profil' element={<Profil/>}/>
              <Route path='/ajoutP' element={<Liv/>}/>
             <Route path="/update/:_id" element={<Update />}/>
             <Route path="/CategorieHomme" element={<CategorieHomme />}/>

             <Route path='/cup' element={<Cup/>}/>
             <Route path='/comb' element={<Comb/>}/>
             <Route path='/coverPhone' element={<CoverPhone/>}/>
             <Route path='/satchel' element={<Satchel/>}/>
             <Route path='/handBag' element={<HandBag/>}/>
             <Route path='/water' element={<WatterBootle/>}/>
            </Routes>
        
        </BrowserRouter>
     
    </div>
  );
}

export default App;