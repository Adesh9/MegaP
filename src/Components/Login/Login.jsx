//import React, { Component } from 'react';
import './Login.css';
import Navbar from '../Navbar/Navbar';
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFirebase } from '../../Context/firebase';
import Footer from '../Footer';


const Login = () =>{
  const firebase = useFirebase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (firebase.isLoggedIn){
      //Navigate to home
      navigate("/Main");
    }
  }, [firebase, navigate])

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log('login in up a user...');
    const result = await firebase.signInWithEmailAndPass(email,password);
    console.log('Successfull', result);
  };

    return(
      <div className='k'>
      <Navbar/>
  <div   className='loginsignup'>
      
      <form onSubmit={handleSubmit}>
  <div className="loginsignup-container-e">
      <h2>LOGIN</h2>
      <div className="loginsignup-fields">
          <input 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email" 
            placeholder="Enter email"/>
          <input 
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password" 
            placeholder="Password"/>
          
          <button className='bt' type="submit">Continue</button>
      </div>
     
  <p className="loginsignup-login">Not a member? <Link to='/Signup'><span>signup</span></Link></p>
  <div className="loginsignup-agree">
      <input type='checkbox' name='' id=''/>
      <p>By continuing, I agree to the terms of use & privacy policy.</p>
  </div>
  </div>
  </form>
  </div>
  <Footer/>
  </div>

    )
}
export default Login;