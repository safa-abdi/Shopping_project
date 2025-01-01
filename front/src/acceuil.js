import React from 'react'
import bgImg from './assets/5.jpg'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

<link rel="stylesheet" 
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

export default function Login() { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(false);
  const [token, setToken] = useState("");
 
  const navigate = useNavigate();


  async function onSubmit(){
    const payload = {
      email: email,
     password: password,
    };
  let response = await fetch("http://localhost:3001/loginetu",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  ).then((res) => {
    if (res.status == 200) {
      swal({
        title: "Connexion avec succès",
        icon: "success",
        button: "Valider",
      });
      
      navigate('/dashEcrivain')
    } else {
      
      console.log("Probléme de connexion");
    }
    
    return res;
  });
  let whoami =  await response.json();
  console.log(response);
      console.log(whoami.users);
    if (whoami?.users != undefined ) {
      localStorage.setItem("user", JSON.stringify(whoami?.users));
    }
    if (whoami?.token != undefined ) {
      localStorage.setItem("token", JSON.stringify(whoami?.token));
    }

    setUser(whoami?.users);
    setToken(whoami.token);
    console.log({ user: user });
    console.log({ token: token });
    console.log(localStorage.getItem("user"));
    console.log(localStorage.getItem("token"));
}
    







  return (
    <div className='oml'>
    <section >
        <div className='App'>
        <div className="register">
            <div className="col-1">
                <h1 className='titre'><b>Sign up</b></h1>
                <span>Sign up and enjoy the service</span>
                
                
                <form id='form' className='flex flex-col'> 
                
                
                <input type="text" placeholder='Email' className='i1' onChange={(e) => {
                    setEmail(e.target.value);
                  }} ></input>
                
                
                    
                                  <input type="text"  placeholder='Password' onChange={(e) => {
                    setPassword(e.target.value);
                  }} />
                  
             <button className='btn'  onClick={onSubmit()}>Sign Up  </button>
                  
                    <h4>don't have an account? <b className='m'><Link to='/register'>Sign Ip</Link></b></h4><br></br>
                </form>
            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
            
            </div>
        </div>
    </section>
    </div>
  )
}