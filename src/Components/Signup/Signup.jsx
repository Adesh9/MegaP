import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../../Context/firebase';
import Navbar from '../Navbar/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

import './Signup.css';


const NewLogin = () =>{
  const firebase = useFirebase();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setfName] = useState('');
  const [lname, setlName] = useState('');

  useEffect(() => {
    if (firebase.isLoggedIn){
      //Navigate to home
      navigate("/Main");

    }
  }, [firebase, navigate])

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log('signin up a user...')
    const result = await firebase.signupUserWithEmailAndPassword(email,password);
    console.log('Successfull', result);
  };

  return(
    
    <div className='th'>
        <Navbar/>
        <div className='loginsignup'>
            <form onSubmit={handleSubmit}>
                <div className="loginsignup-container">
                    <h1>Sign Up</h1>
                    <div className="loginsignup-fields-second">
                        <input 
                            onChange={(e) => setfName(e.target.value)}
                            value={fname}
                            type="fname" 
                            placeholder="Enter Name"/>
                        <input 
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email" 
                            placeholder="Enter email"/>
                        <input 
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password" placeholder="Password"/>
                        <button type="submit">Continue</button>
                    </div>
        
                    <p className="loginsignup-login">Already have an account? <Link to='/Login'><span>Login here</span></Link></p>
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
export default NewLogin;


