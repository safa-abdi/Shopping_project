import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import './Login.css';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

function Login() {
    const [email, setEmail] = useState("");
    const [motDePasse, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false); // État pour la visibilité du mot de passe
    const [error, setError] = useState("");
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
   
    const navigate = useNavigate();
  
    async function onSubmit(e) {
        e.preventDefault();
        const payload = {
            email: email,
            motDePasse: motDePasse,
            role: 'Imprimeur'
        };

        try {
            const response = await fetch("http://localhost:3000/loginUser", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
console.log(response)
            if (response.status === 200) {
                let whoami = await response.json();

                console.log("Connexion avec succès", whoami.data.user);

                localStorage.setItem("user", JSON.stringify(whoami.data.user));
                localStorage.setItem("token", whoami.data.token);

                swal({
                    title: "Connexion avec succès",
                    icon: "success",
                    button: "Valider",
                });

                navigate('/dash');
            } else {
                setError(true);
                console.log("Problème de connexion");
                const errorData = await response.json();
                console.log("Erreur de connexion :", errorData);
            }
        } catch (error) {
            console.error("Erreur lors de la connexion", error);
        }
    }

    // Fonction pour inverser la visibilité du mot de passe
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
      
    return (
        <div className="signUp-container">
            <Header></Header>
            <div>
                <div className="account section">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-5 rounded border">
                            <div className="login-form p-5">
                                <div className="text-center heading">
                                    <h2>Sign In</h2>
                                    <p className="lead">Don't have an account? <Link to="/signup" className='sp'> Sign up</Link></p>
                                </div>
                                <form onSubmit={onSubmit}>
                                    <div className="form-group mb-4 input-with-icon">
                                        <label htmlFor="#">Enter Email Address</label>
                                        <div className="input-group">
                                            <span className="input-icon">
                                                <i className="fa fa-envelope"></i> {/* Correctement utilisé */}
                                            </span>
                                            <input type="text" className="form-control rounded border border-dark" placeholder="Enter Email Address" onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="form-group mb-4 input-with-icon">
                                        <label htmlFor="#">Enter Password</label>
                                        <div className="input-group">
                                            <span className="input-icon">
                                                <i className="fa fa-lock" style={{ fontSize: '25px', marginRight: '10px' }}></i> {/* Correction */}
                                            </span>
                                            <input 
                                                type={passwordVisible ? "text" : "password"} 
                                                className="form-control rounded border border-dark rounded-4 inp" 
                                                placeholder="Enter Password" 
                                                onChange={(e) => setPassword(e.target.value)} 
                                            />
                                            <span className="input-icon" onClick={togglePasswordVisibility} style={{ cursor: 'pointer',alignSelf:"end" , marginLeft:"500px" }}>
                                                <i className={passwordVisible ? "fa fa-eye-slash" : "fa fa-eye"}></i> {/* Icone pour afficher/masquer */}
                                            </span>
                                        </div>











                                    </div>

                                    <button className='btn11' style={{width:"100%"}} type="submit">Sign In</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Login;
