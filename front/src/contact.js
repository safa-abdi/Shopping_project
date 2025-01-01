import React from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "./content_option"
import Header from "./Header";
import Footer from "./Footer";
import swal from 'sweetalert';


import { useNavigate } from "react-router-dom";
import  {useEffect, useState} from "react";
export default function ContactUs() {
  
 
    const[email , setEmail]=useState("")
    const[message , setMessage]=useState("")
    const[name , setName]=useState("")

    const navigate = useNavigate();
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    const[error , setError]=useState(false);
      async function Add(){
  
        if( !email || !name     || !message || !regEx.test(email) ){
            setError(true);
           return false;
              
          }
          let item = {name , email ,message }
        
          let result = await fetch("http://localhost:3000/api/ajoutContact" , {
              method: 'POST',
              body:JSON.stringify(item),
              headers:{
                  "Content-Type" : 'application/json',
                  "Accept" : 'application/json'
              }
          })
         
          result = result.json();
       
          if(result){
            swal({
              title: "Envoyer avec succès",
              icon: "success",
              button: "Valider",
            });
            
          }
          else{
              swal({
                  title: "Echec d'ajout' ",
                 
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                });
          
          }
         
        
         
      }
  return (
    <div>
    <Header/>
      <Container>
    
        <Row className="mb-5 mt-3">
          <Col >
            <h2 style={{color:'blue'}}><strong>Contact As</strong></h2>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form  className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    style={{backgroundColor:'white'  }}
                    id="name"
                    name="name"
                    placeholder="Name" 
                    type="text"
                    required 
                    onChange={(e)=>setName(e.target.value)}
                  />
                  
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    style={{backgroundColor:'white'  }}
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email" 
                    required 
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                   {error && !regEx.test(email) &&<span className='eroor'  > &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<b>email invalide</b></span>}
                
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5" 
                required
                onChange={(e)=>setMessage(e.target.value)}
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; <button className="submit-btn" type="submit" onClick={Add}>
 
                  Send
                  </button>
                </Col>
              </Row>
            </form>
          
          </Col>
        </Row>
       
      </Container>
      <br/><br/><br/>  <br/><br/><br/>  
      <Footer/>
      </div>
  );
}