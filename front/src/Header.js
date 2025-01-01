import "jquery/dist/jquery.slim.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";


import Logo from './images/logo.png';



import { Link } from "react-router-dom";
import './Header.css'
function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light w-100 navigation py-1" id="navbar">
        
        <div class="container">
       
         <Link class="navbar-brand" to={{ pathname: "/"}}><img class ="Logo" src={Logo} className="logoG"></img></Link>
            

            <div class="collapse navbar-collapse " id="main-navbar">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item active">
                <Link class="nav-link " to={{ pathname: "/"}}>Home</Link>
                </li>

                <li class="nav-item">
                <a class="nav-link " href="/aboutus">About Us</a>
                </li>
                <li class="nav-item">
               
               <a class="nav-link " href="/contact">  Contact us</a>
        
             
             </li>

                <li class="nav-item dropdown dropdown-slide">
                <a class="nav-link  dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-delay="350"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    shop
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown4">
                    <li><a href="/genres">Genres</a></li>
                 
                    <li><a href="/produits">Products</a></li>
                 
                    
                </ul>
                </li>

                
                <li class="nav-item">
                <a class="nav-link " href="/login">Account </a>
                </li>
               
            </ul>
            </div>
        

            <ul class="top-menu list-inline mb-0 d-none d-lg-block" id="top-menu">
            <li class="list-inline-item">
                <a href="#" class="search_toggle" id="search-icon"><i class="tf-ion-android-search"></i></a>
            </li>

            
            </ul>
        </div>
        </nav>
    );
}

export default Header;