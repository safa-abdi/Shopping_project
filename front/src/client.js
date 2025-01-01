import Header from './Header'; //Include Header
import Footer from './Footer'; //Include Footer
import Home from './Home'
import Shop from './Shop'
import SingleProduct from './SingeleProduct'
import Checkout from './Checkout'
import Cart from './Cart'
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import Genres from './Genres';
import Aboutus from './Aboutus';
import Form from './inscription';



function Client() {
  return (
    <div className="Appp">
      
       
          <Header></Header>
            <Home/>
          <Footer></Footer>
       
     
    </div>
  );
}

export default Client;